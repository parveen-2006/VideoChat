import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      
      <h1 className="text-xl font-semibold">
        VideoChat
      </h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>

        <Link to="/register" className="hover:text-blue-400 transition">
          Register
        </Link>

        <Link to="/login" className="hover:text-blue-400 transition">
          Login
        </Link>
      </div>

    </nav>
  );
}