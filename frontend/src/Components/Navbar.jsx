import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/login", label: "Login" },
    { to: "/register", label: "Register" },
  ];

  return (
    <nav className="w-full bg-white border-b border-slate-100 shadow-sm px-8 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-200">
          <span className="text-white text-xs font-bold">P</span>
        </div>
        <span className="text-lg font-bold text-slate-800 tracking-tight">
          Parvyn
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-1">
        {links.map(({ to, label }) => {
          const isActive = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {label}
            </Link>
          );
        })}

        {/* CTA Button */}
        <Link
          to="/register"
          className="ml-3 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-200 hover:bg-blue-600 active:scale-95 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-slate-600 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg flex flex-col px-6 py-4 gap-2 md:hidden">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                pathname === to
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="mt-1 px-4 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-semibold text-center shadow-md shadow-blue-200 hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}