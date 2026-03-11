import React, { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneSlash } from "react-icons/fa";

export default function Room() {

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

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

    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  // Toggle microphone
  const toggleMic = () => {
    stream.getAudioTracks()[0].enabled = !micOn;
    setMicOn(!micOn);
  };

  // Toggle camera
  const toggleCamera = () => {
    stream.getVideoTracks()[0].enabled = !camOn;
    setCamOn(!camOn);
  };

  const leaveCall = () => {
    stream.getTracks().forEach(track => track.stop());
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

      {/* Local Video (overlay) */}
      <video
        ref={localVideoRef}
        autoPlay
        muted
        playsInline
        className="absolute bottom-28 right-6 w-56 rounded-xl border-2 border-gray-700 shadow-lg"
      />

      {/* Controls */}
      <div className="absolute bottom-6 flex gap-6 bg-gray-900 px-6 py-3 rounded-full shadow-xl">

        {/* Mic */}
        <button
          onClick={toggleMic}
          className={`p-3 rounded-full ${micOn ? "bg-gray-700" : "bg-red-600"}`}
        >
          {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
        </button>

        {/* Camera */}
        <button
          onClick={toggleCamera}
          className={`p-3 rounded-full ${camOn ? "bg-gray-700" : "bg-red-600"}`}
        >
          {camOn ? <FaVideo /> : <FaVideoSlash />}
        </button>

        {/* Leave Call */}
        <button
          onClick={leaveCall}
          className="p-3 rounded-full bg-red-600"
        >
          <FaPhoneSlash />
        </button>

      </div>

    </div>
  );
}