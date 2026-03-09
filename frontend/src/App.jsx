import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Protected from "./Components/Protected";
import Home from "./Pages/Home";

export default function App() {
  const router = createBrowserRouter([
    // {
    //   element: <Protected />,
    //   children: [
    //     {
    //       path: "/",
    //       element: <Home />,
    //     },
    //   ],
    // },

    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
      children: [],
    },
    {
      path: "/register",
      element: (
        <>
          <Navbar />
          <Register />
        </>
      ),
    },
    {
      path: "/login",
      element:        <>
          <Navbar />
          <Login />
        </>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
