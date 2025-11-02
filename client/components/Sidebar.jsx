"use client";
import React from "react";
import FollowedChannels from "./ui/FollowedChannels";
import LiveChannels from "./ui/LiveChannels";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-[#26262C] min-h-screen w-60 pl-3 sticky top-0 hidden lg:block">
        <div className="flex justify-start">
          <h1 className="text-white text-lg font-normal pt-2 pb-2">For You</h1>
        </div>
        <FollowedChannels />
        <LiveChannels />
      </aside>
    </>
  );
};

export default Sidebar;
