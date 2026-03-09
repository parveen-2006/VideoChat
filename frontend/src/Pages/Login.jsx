import React, { useState } from "react";
import instance from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await instance.post("/user/login", login);
      if (result && result.data.success && result.data.token) {
        localStorage.setItem("token", result.data.token);
        navigate("/");
      }
      console.log(result);
      alert("login Successfully");
    } catch (err) {
      console.log("login err : ", err);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex items-center flex-col gap-15">
      <h1 className="text-6xl">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="border-3 h-[200px] w-fit rounded grid row-2 border-blue-400 p-3 bg-blue-200/20 "
      >
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
            placeholder="Enter your luckiest email you've ever got"
            className="ml-3 rounded p-2 focus:outline-sky-300"
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="ml-3  rounded p-2 focus:outline-sky-300"
          />
        </div>
        <button
          type="submit"
          className="border outline-none  rounded h-8 w-23 text-1xl self-center place-self-center"
        >
          Login In
        </button>
      </form>
    </div>
  );
}
