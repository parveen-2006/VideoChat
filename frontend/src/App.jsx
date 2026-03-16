import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Protected from "./Components/Protected";
import Home from "./Pages/Home";
import Room from "./Pages/Room";
import Footer from "./Components/Footer";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <><Navbar /><Outlet /></>,
      children: [
        {
          path: "/",
          element: <Protected />,
          // element: <Home />,
          children: [

            {
              path: "/",
              element: (
                <>
                  {/* <Navbar /> */}
                  <Home />
                  <Footer />
                </>
              ),
              children: [],
            },

            {
              path: "/room",
              element: <>
                {/* <Navbar /> */}
                <Room />
              </>,
            },
          ]
        },
        {
          path: "/register",
          element: (
            <>
              {/* <Navbar /> */}
              <Register />
            </>
          ),
        },
        {
          path: "/login",
          element: <>
            {/* <Navbar /> */}
            <Login />
          </>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
