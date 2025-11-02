import React from "react";
import twitchIcon from "../../public/Twitch-Icon.png";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link"


const LeftSideBar = () => {
  return (
    <div className="flex justify-between space-x-8 ml-3">
      <Link href="/">
        <Image alt="Twitch Icon" src={twitchIcon} className="h-8 w-8" />
      </Link>
      <h1 className="text-white font-semibold text-md">Following</h1>
      <h1 className="text-white font-semibold text-md">Browse</h1>
      <MoreVertical className="text-white" />
    </div>
  );
};

export default LeftSideBar;
