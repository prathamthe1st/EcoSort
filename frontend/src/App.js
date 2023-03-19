import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./Pages/adminDashboard";
import Home from "./Pages/home";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import UserDashboard from "./Pages/userDashboard";
import Pickups from "./Pages/pickups";
import Stats from "./Pages/stats";
import Trucks from "./Pages/trucks";
import Workforce from "./Pages/workforce";
import Report from "./Pages/report";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/userDashboard",
      element: <UserDashboard />,
    },
    {
      path: "/pickups",
      element: <Pickups/>,
    },
    {
      path: "/stats",
      element: <Stats/>,
    },
    {
      path: "/trucks",
      element: <Trucks/>,
    },
    {
      path: "/workforce",
      element: <Workforce/>,
    },
    {
      path: "/report",
      element: <Report/>,
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
  </>
  );
}

export default App;
