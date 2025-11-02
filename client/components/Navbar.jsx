"use client";
import React from "react";
import SearchBar from "./ui/SearchBar.jsx"
import LeftSideBar from "./ui/LeftSideBar.jsx";
import RightSideBar from "./ui/RightSideBar.jsx";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#18181B] flex justify-between items-center h-14 w-full px-2 sm:px-4">
       <LeftSideBar/>
       <SearchBar/>
       <RightSideBar/>
      </nav>
    </>
  );
};

export default Navbar;