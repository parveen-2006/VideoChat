import React from "react";
import { GiPolarStar } from "react-icons/gi";

export default function Marquee() {
  const List = [
    { icons: <GiPolarStar />, content: "AI Noise Cancellation" },
    { icons: <GiPolarStar />, content: "Screen Sharing" },
    { icons: <GiPolarStar />, content: "100 Participants" },
    { icons: <GiPolarStar />, content: "AI Meeting Summaries" },
    { icons: <GiPolarStar />, content: "Works Everywhere" },
    { icons: <GiPolarStar />, content: "Crystal-clear HD Video" },
    { icons: <GiPolarStar />, content: "End-to-end Encrypted" },
    { icons: <GiPolarStar />, content: "No Download Needed" },
  ];

  return (
    <div className="bg-gray-800 h-10 flex items-center">
      <marquee scrollAmount="6">
        <div className="flex gap-20 whitespace-nowrap">
          {[...List, ...List , ...List].map((v, k) => (
            <div key={k} className="flex items-center gap-2 text-white">
              <span>{v.icons}</span>
              <span>{v.content}</span>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
}