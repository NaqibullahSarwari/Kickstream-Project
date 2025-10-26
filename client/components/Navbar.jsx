"use client";
import React from "react";
import Image from "next/image";
import twitchIcon from "../public/Twitch-Icon.png";
import { MoreVertical, Search, Camera } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#18181B] flex justify-between items-center h-14 w-screen">
        <div className="flex justify-between space-x-8 ml-3">
          <Image alt="Twitch Icon" src={twitchIcon} className="h-8 w-8" />
          <h1 className="text-white font-semibold text-md">Following</h1>
          <h1 className="text-white font-semibold text-md">Browse</h1>
          <MoreVertical className="text-white" />
        </div>
        <div className="flex justify-end">
          <input
            type="search"
            placeholder="Search"
            className="text-gray-300 pl-4 font-md bg-[#18181B] outline-none border-2 border-gray-300 h-10 w-90 rounded-tl-lg rounded-bl-lg"
          />
          <div className="bg-[#34343B] hover:bg-[#414149] h-10 w-10 flex justify-center items-center rounded-br-lg rounded-tr-lg">
            <Search className="text-white font-black text-3xl" />
          </div>
        </div>
        <div className="flex justify-around space-x-4 mr-3">
          <div className="flex justify-center items-center bg-[#34343B] hover:bg-[#414149] h-9 w-27 rounded-3xl">
            <Camera className="text-white font-xl h-4" />
            <button className="text-white font-semibold text-sm">
              Dashboard
            </button>
          </div>
          <div className="flex justify-center items-center bg-[#34343B] hover:bg-[#414149] h-9 w-18 rounded-3xl">
            <button className="text-white font-semibold text-sm">
              Register
            </button>
          </div>
          <div className="flex justify-center items-center bg-[#34343B] hover:bg-[#414149] h-9 w-15 rounded-3xl">
            <button className="text-white font-semibold text-sm">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
