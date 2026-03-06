import React, { useState } from "react";

export default function Login() {
  const [login, setLogin] = usestate({
    email: "",
    password: "",
  });

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
