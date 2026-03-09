import React from "react";
import { FaCircle } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import Marquee from "../Components/marquee";
import Card from "../Components/Card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-[90vh] items-center justify-between bg-amber-50/1">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-10 lg:p-14 gap-6">

          {/* notification */}
          <div className="rounded-xl border text-sky-500 border-sky-400 h-[25px] w-[190px] flex justify-center">
            <h3 className="text-[10px] m-1 flex items-center gap-2 font-medium">
              <FaCircle className="text-sky-500 text-[6px]" />
              AI noise cancellation - now live
            </h3>
          </div>

          {/* heading */}
          <div className="font-medium font-serif flex flex-col gap-2">

            <h1 className="text-3xl sm:text-4xl lg:text-6xl leading-tight">
              Video calls that <br />
              feel
              <span className="text-sky-400 italic"> genuinely</span>
              <br /> human.
            </h1>

            <h2 className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              Not
              <span className="italic"> just Functional.</span>
            </h2>

          </div>

          {/* paragraph */}
          <p className="text-gray-400 text-base sm:text-lg lg:text-2xl max-w-xl">
            Parvyn brings the warmth back to remote conversation — HD clarity,
            near-zero latency, and a calm interface that never gets in your way.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button className="h-[50px] w-full sm:w-[180px] text-white text-[16px] hover:shadow-xl border-sky-300 bg-sky-300 hover:bg-sky-500 rounded-full flex items-center justify-center gap-2">
              <GoTriangleRight />
              Start a call
            </button>

            <button className="h-[50px] w-full sm:w-[180px] hover:text-sky-300 border-sky-300 border hover:border-2 rounded-full flex items-center justify-center gap-2">
              <GoTriangleRight />
              Watch demo
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full h-[89vh] lg:w-1/2 flex items-center justify-center p-6 bg-sky-400/10
        ">
          <img
            src="https://www.pexels.com/photo/fresh-lemons-in-sunlight-on-a-textured-surface-36371223/https://www.pexels.com/photo/fresh-lemons-in-sunlight-on-a-textured-surface-36371223/"
            alt="Video call interface preview"
            className="w-full max-w-[520px] rounded-3xl shadow-2xl"
          />
        </div>

      </div>

      <Marquee />
      <Card />
    </>
  );
}