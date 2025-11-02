"use client";
import React from "react";
import clashofclansLogo from "../../public/clashofclans-logo.png";
import tubboLogo from "../../public/tubbo-logo.png";
import mayuwiiLogo from "../../public/Mayuwii-logo.png";
import Image from "next/image"

const FollowedChannels = () => {
  const channels = [
    {
      id: 1,
      logo: clashofclansLogo,
      name: "ClashOfClans",
      status: "Offline",
      alt: "Clash of clans Logo"
    },
    {
      id: 2,
      logo: tubboLogo,
      name: "Tubbo",
      status: "Offline",
      alt: "Tubbo Logo"
    },
    {
      id: 3,
      logo: mayuwiiLogo,
      name: "Mayuwii",
      status: "Offline",
      alt: "Mayuwii Logo"
    }
  ];

  return (
    <div className="pr-2">
      <div>
        <h1 className="text-[#8B8B8F] font-semibold text-xs sm:text-sm pb-3">
          Followed Channels
        </h1>
      </div>
      <div className="space-y-2">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className="bg-[#26262C] hover:bg-[#2f2f35] h-10 w-full flex justify-between items-center px-2 rounded cursor-pointer transition-colors"
          >
            <div className="flex justify-start flex-shrink-0">
              <Image
                src={channel.logo}
                alt={channel.alt}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
              />
            </div>
            <h1 className="text-white font-semibold text-xs sm:text-sm truncate px-2 flex-1 text-left">
              {channel.name}
            </h1>
            <h1 className="text-gray-400 text-xs sm:text-sm flex-shrink-0">
              {channel.status}
            </h1>
          </div>
        ))}
      </div>
      <h1 className="text-[#A970FF] hover:text-white pt-3 text-xs sm:text-sm font-normal cursor-pointer transition-colors">
        Show More
      </h1>
    </div>
  );
};

export default FollowedChannels;