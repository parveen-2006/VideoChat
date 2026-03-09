import React from "react";
import { FaCircle } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import Marquee from "../Components/marquee";


export default function Home() {
  return (
    <>
      <div className="flex h-[90vh] items-center justify-around border bg-amber-50/1">
        <div className="border h-[100%] w-[50%] flex items-start justify-center flex-col p-14 gap-7">
          {/* icons - ai */}
          <div className="notify rounded-xl border text-sky-500 border-sky-400 h-[25px] w-[190px] flex justify-center">
            <h3 className="text-[10px] m-1 flex items-center gap-2 font-medium">
              <FaCircle className="text-sky-500 text-[6px]" /> AI noise
              cancellation - now live
            </h3>
          </div>
          {/* content */}
          <div className="h-[250px] text-6xl font-medium font-serif flex flex-col gap-2 items-center">
            <h1 className="leading-[60px]">
              Video calls that <br />
              feel
              <span className="text-sky-400 italic"> genuinely</span>
              <br /> human.
            </h1>
            <h2 className="text-gray-300 text-5xl">
              Not
              <span className="italic"> just Functional.</span>
            </h2>
          </div>
          {/* Paragraphs */}
          <p className="text-gray-400 text-2xl">
            Parvyn brings the warmth back to remote conversation — HD clarity,
            near-zero latency, and a calm interface <br /> that never gets in
            your way.
          </p>
          {/* BUTTON */}
          <div className="flex items-center justify-between gap-6">
            <button className="h-[50px] w-[180px] text-white  text-[17px] hover:shadow-xl border-sky-300 bg-sky-300 hover:bg-sky-500 rounded-4xl flex items-center p-2 justify-center">
              <GoTriangleRight />
              <h1>Start a call for free</h1>
            </button>
            <button className="h-[50px] w-[180px] hover:text-sky-300 border-sky-300 border hover:border-2  rounded-4xl flex items-center p-2 justify-center">
              <GoTriangleRight />
              <h1>Start a call for free</h1>
            </button>
          </div>
        </div>
        <div className="border h-[100%] w-[50%] flex items-center justify-center">
          pictures
        </div>
      </div>
      <Marquee />
    </>
  );
}
