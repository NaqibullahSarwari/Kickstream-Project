"use client";
import React from "react";
import twitchIcon from "../../public/Twitch-Icon.png";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LeftSideBar = () => {
  return (
    <div className="flex justify-between items-center space-x-2 sm:space-x-4 md:space-x-8 ml-2 sm:ml-3">
      <Link href="/" className="flex-shrink-0">
        <Image
          alt="Twitch Icon"
          src={twitchIcon}
          className="h-7 w-7 sm:h-8 sm:w-8"
        />
      </Link>
      <h1 className="text-white font-semibold text-xs sm:text-lg md:text-md hover:text-[#A970FF] transition-colors cursor-pointer hidden sm:block">
        Following
      </h1>
      <h1 className="text-white font-semibold text-xs sm:text-lg md:text-md hover:text-[#A970FF] transition-colors cursor-pointer hidden md:block">
        Browse
      </h1>
      <MoreVertical
        className="text-white cursor-pointer hover:text-[#A970FF] transition-colors flex-shrink-0"
        size={20}
      />
    </div>
  );
};

export default LeftSideBar;
