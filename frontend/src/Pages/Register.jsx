import React, { useState } from "react";
import instance from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [Register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  // const handleValidation = () => {
  //   if (!name || !email || !password || !createPassword) {
  //     alert("fill you data");
  //   }
  //   if (password !== password) {
  //     alert("password mismatched");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await instance.post("/user/register", Register);
      console.log(result);

      alert("Successfully registered!");
      setRegister({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    } catch (err) {
      console.log("register : ", err.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center flex-col gap-15">
      <h1 className="text-6xl">Create account</h1>
      <form
        className="border-3 h-[300px] w-fit rounded grid row-2 border-blue-400 p-3 bg-blue-200/20 "
        onSubmit={handleSubmit}
      >
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={Register.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="ml-3  rounded p-2 focus:outline-sky-300"
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={Register.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="ml-3  rounded p-2 focus:outline-sky-300"
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={Register.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            className="ml-3  rounded p-2 focus:outline-sky-300"
          />
        </div>
        <div>
          <label>confirmPassword :</label>
          <input
            type="password"
            name="confirmPassword"
            value={Register.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            required
            className="ml-3  rounded p-2 focus:outline-sky-300"
          />
        </div>
        <button
          type="submit"
          className="border outline-none  rounded h-8 w-23 text-1xl self-center place-self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
