"use client";
import React from "react";
import clashofclansLogo from "../../public/clashofclans-logo.png";
import tubboLogo from "../../public/tubbo-logo.png";
import mayuwiiLogo from "../../public/Mayuwii-logo.png";
import Image from "next/image"

const FollowedChannels = () => {
  return (
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
      <h1 className="text-[#A970FF] pt-1 text-sm font-normal">Shore More</h1>
    </div>
  );
};

export default FollowedChannels;
