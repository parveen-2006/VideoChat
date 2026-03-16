import React, { useState } from "react";
import instance from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await instance.post("/user/register", form);
      console.log(result);
      alert("Successfully registered!");
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
      navigate("/login");
    } catch (err) {
      console.log("register : ", err.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/5 rounded-full" />

        <div className="relative z-10 text-center text-white max-w-sm">
          {/* Logo / Icon */}
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/30">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>

          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Welcome aboard!
          </h2>
          <p className="text-blue-100 text-base leading-relaxed mb-10">
            Create your account and start your journey with us. Everything you need, all in one place.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-4 text-left">
            {[
              { icon: "⚡", text: "Lightning fast experience" },
              { icon: "🔒", text: "Secure & private by default" },
              { icon: "🌍", text: "Access from anywhere" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm border border-white/20">
                <span className="text-xl">{icon}</span>
                <span className="text-sm font-medium text-white">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Create account</h1>
            <p className="text-slate-400 text-sm mt-1">Fill in the details below to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "John Doe" },
              { label: "Email Address", name: "email", type: "email", placeholder: "john@example.com" },
              { label: "Password", name: "password", type: "password", placeholder: "Create a password" },
              { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Repeat your password" },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-600">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            ))}

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-500 hover:text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}