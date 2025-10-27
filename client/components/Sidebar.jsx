"use client";
import React from "react";
import clashofclansLogo from "../public/clashofclans-logo.png";
import tubboLogo from "../public/tubbo-logo.png";
import mayuwiiLogo from "../public/Mayuwii-logo.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-[#26262C] min-h-screen w-60 pl-3 sticky top-0">
        <div className="flex justify-start">
          <h1 className="text-white text-lg font-normal pt-2 pb-2 ">For You</h1>
        </div>
        <div className="">
          <div>
            <h1 className="text-[#8B8B8F] font-semibold text-sm pb-3">
              Followed Channels
            </h1>
          </div>
          <div>
            <div className="bg-[#26262C] h-10 w-50 flex justify-between items-center">
              <div className="flex justify-start">
                <Image
                  src={clashofclansLogo}
                  alt="Clash of clans Logo"
                  className="h-8 w-8 rounded-4xl"
                />
              </div>
              <h1 className="text-white font-semibold text-sm">ClashOfClans</h1>
              <h1 className="text-white text-sm">Offline</h1>
            </div>
          </div>
          <div>
            <div className="bg-[#26262C] h-10 w-50 flex justify-between items-center">
              <div className="flex justify-start">
                <Image
                  src={tubboLogo}
                  alt="Clash of clans Logo"
                  className="h-8 w-8 rounded-4xl"
                />
              </div>
              <h1 className="text-white font-semibold text-sm">Tubbo</h1>
              <h1 className="text-white text-sm">Offline</h1>
            </div>
          </div>
          <div>
            <div className="bg-[#26262C] h-10 w-50 flex justify-between items-center">
              <div className="flex justify-start">
                <Image
                  src={mayuwiiLogo}
                  alt="Clash of clans Logo"
                  className="h-8 w-8 rounded-4xl"
                />
              </div>
              <h1 className="text-white font-semibold text-sm">Mayuwii</h1>
              <h1 className="text-white text-sm">Offline</h1>
            </div>
          </div>
          <h1 className="text-[#A970FF] pt-1 text-sm font-normal">
            Shore More
          </h1>
        </div>
        <div>
          <h1 className="text-white font-semibold text-md pt-4 pb-3">
            Live Channels
          </h1>
          <div>
            <div className="bg-[#26262C] h-10 w-50 flex justify-between items-center">
              <div className="flex justify-start">
                <Image
                  src={clashofclansLogo}
                  alt="Clash of clans Logo"
                  className="h-8 w-8 rounded-4xl"
                />
              </div>
              <h1 className="text-white font-semibold text-sm">ClashOfClans</h1>
              <div className="flex justify-center items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                <h1 className="text-white text-sm">12k</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#26262C] h-10 w-50 flex justify-between items-center">
              <div className="flex justify-start">
                <Image
                  src={tubboLogo}
                  alt="Clash of clans Logo"
                  className="h-8 w-8 rounded-4xl"
                />
              </div>
              <h1 className="text-white font-semibold text-sm">Tubbo</h1>
              <div className="flex justify-center items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                <h1 className="text-white text-sm">2.3m</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#26262C] h-10 w-50 flex justify-between items-center">
              <div className="flex justify-start">
                <Image
                  src={mayuwiiLogo}
                  alt="Clash of clans Logo"
                  className="h-8 w-8 rounded-4xl"
                />
              </div>
              <h1 className="text-white font-semibold text-sm">Mayuwii</h1>
              <div className="flex justify-center items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                <h1 className="text-white text-sm">12.3k</h1>
              </div>
            </div>
          </div>
          <h1 className="text-[#A970FF] pt-1 text-sm font-normal">
            Shore More
          </h1>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
