import React, { useState } from "react";
import instance from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate =  useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await instance.post("/user/login", login);
      if (result && result.data.success && result.data.token) {
        localStorage.setItem("token", result.data.token);
        navigate("/")
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
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
            placeholder="Enter your luckiest email you've ever got"
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
          />
        </div>
        <button type="submit">Login In</button>
      </form>
    </>
  );
}
