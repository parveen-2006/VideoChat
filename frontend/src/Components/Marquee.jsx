import React from "react";
import { GiPolarStar } from "react-icons/gi";

export default function marquee() {
  const List = [
    {
      icons: <GiPolarStar />,
      content: "AI Noise Cancellation",
    },
    {
      icons: <GiPolarStar />,
      content: "Screen Sharing",
    },
    {
      icons: <GiPolarStar />,
      content: "100 Participants",
    },
    {
      icons: <GiPolarStar />,
      content: "AI Meeting Summaries",
    },
    {
      icons: <GiPolarStar />,
      content: "Works Everywhere",
    },
    {
      icons: <GiPolarStar />,
      content: "Crystal-clear HD Video",
    },
    {
      icons: <GiPolarStar />,
      content: "End-to-end Encrypted",
    },
    {
      icons: <GiPolarStar />,
      content: "No Downloade Needed",
    },
  ];
  return (
    <>
      <div className="bg-gray-800 h-10 flex items-center">
        <marquee>
          <div className="flex gap-20">
            {List.map((v, k) => {
              return (
                <div key={k} className="flex items-center gap-2 text-white  ">
                  <h1>{v.content}</h1>
                  <h3>{v.icons}</h3>
                </div>
              );
            })}
          </div>
        </marquee>
      </div>
    </>
  );
}
