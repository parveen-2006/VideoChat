import React, { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneSlash } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://192.168.4.62:3000");

export default function Room() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("id");

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(mediaStream);

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = mediaStream;
      }

      joinRoom(mediaStream);

    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  const joinRoom = (mediaStream) => {
    socket.emit("join-room", roomId);

    // Doosra banda pehle se hai room mein
    socket.on("user-joined", async () => {
      const peer = createPeer(mediaStream);
      peerRef.current = peer;

      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);
      socket.emit("offer", { roomId, offer });
    });

    // Offer mila → answer bhejo
    socket.on("offer", async ({ offer }) => {
      const peer = createPeer(mediaStream);
      peerRef.current = peer;

      await peer.setRemoteDescription(offer);
      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);
      socket.emit("answer", { roomId, answer });
    });

    // Answer mila
    socket.on("answer", async (answer) => {
      await peerRef.current.setRemoteDescription(answer);
    });

    // ICE candidates
    socket.on("ice-candidate", async (candidate) => {
      await peerRef.current.addIceCandidate(candidate);
    });
  };

  const createPeer = (mediaStream) => {
    const peer = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    // Apni stream peer mein daalo
    mediaStream.getTracks().forEach((track) => {
      peer.addTrack(track, mediaStream);
    });

    // ICE candidate mila toh server ko bhejo
    peer.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit("ice-candidate", { roomId, candidate: e.candidate });
      }
    };

    // Remote stream mila toh video mein lagao
    peer.ontrack = (e) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = e.streams[0];
      }
    };

    return peer;
  };

  const toggleMic = () => {
    stream.getAudioTracks()[0].enabled = !micOn;
    setMicOn(!micOn);
  };

  const toggleCamera = () => {
    stream.getVideoTracks()[0].enabled = !camOn;
    setCamOn(!camOn);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  const leaveCall = () => {
    stream.getTracks().forEach((track) => track.stop());
    if (peerRef.current) peerRef.current.close();
    socket.disconnect();
    window.location.href = "/";
  };

  return (
    <div className="h-screen w-full bg-gray-950 flex items-center justify-center relative text-white">

      {/* Remote Video */}
      <video
        ref={remoteVideoRef}
        autoPlay
        playsInline
        className="h-full w-full object-cover"
      />

      {/* Local Video */}
      <video
        ref={localVideoRef}
        autoPlay
        muted
        playsInline
        className="absolute bottom-28 right-6 w-56 rounded-xl border-2 border-gray-700 shadow-lg scale-x-[-1]"
      />

      {/* Controls */}
      <div className="absolute bottom-6 flex gap-6 bg-gray-900 px-6 py-3 rounded-full shadow-xl">
        <button onClick={toggleMic} className={`p-3 rounded-full ${micOn ? "bg-gray-700" : "bg-red-600"}`}>
          {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
        </button>
        <button onClick={toggleCamera} className={`p-3 rounded-full ${camOn ? "bg-gray-700" : "bg-red-600"}`}>
          {camOn ? <FaVideo /> : <FaVideoSlash />}
        </button>
        <button onClick={leaveCall} className="p-3 rounded-full bg-red-600">
          <FaPhoneSlash />
        </button>
      </div>

    </div>
  );
}