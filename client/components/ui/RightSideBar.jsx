"use client";
import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";

const RightSideBar = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-3 ">
        <Dashboard />
        <Login />
        <Register />
      </div>
    </>
  );
};

export default RightSideBar;
