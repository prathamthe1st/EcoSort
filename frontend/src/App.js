import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./Pages/adminDashboard";
import Home from "./Pages/home";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
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
  ]);
  return (
    <>
    <RouterProvider router={router} />
  </>
  );
}

export default App;
