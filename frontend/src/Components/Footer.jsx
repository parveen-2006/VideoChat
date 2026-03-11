import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Parvyn
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            A real-time video communication platform built with modern
            technologies like WebRTC, Socket.io and React.
          </p>
        </div>


        {/* Links */}
        <div>
          <h3 className="text-white font-medium mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>


        {/* Social */}
        <div>
          <h3 className="text-white font-medium mb-3">
            Connect
          </h3>

          <div className="flex gap-4 text-lg">

            <a
              href="https://github.com/parveen-2006"
              className="hover:text-white transition"
            >
              <FaGithub  />
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>

          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">

        © {new Date().getFullYear()} VideoChat. All rights reserved.

      </div>

    </footer>
  );
}