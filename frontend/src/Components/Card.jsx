import React from "react";
import { FaPlay } from "react-icons/fa";

export default function Card() {
  return (
    <div className="w-full flex justify-center px-4 py-10 bg-gray-200">
      
      <div className="w-full max-w-5xl bg-gradient-to-r from-[#0b1e4b] to-[#0a1a3a] 
      text-white rounded-[40px] py-16 px-6 md:px-16 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Ready for a <span className="text-blue-300 italic">better</span>
          <br />
          way to meet?
        </h1>

        {/* Sub text */}
        <div className="mt-6 space-y-2 text-sm md:text-lg">
          <p className="inline-block px-2 py-1 rounded">
            Join 2.1 million teams having smarter, clearer video calls.
          </p>
          <br />
          <p className="inline-block px-2 rounded">
            Your first room is ready in 10 seconds.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            <FaPlay className="text-sm" />
            Start for free
          </button>

          <button className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition">
            Watch demo →
          </button>
        </div>

        {/* Bottom text */}
        <p className="text-xs text-gray-400 mt-8 tracking-wide">
          Free forever • No credit card • Cancel anytime
        </p>

      </div>

    </div>
  );
}