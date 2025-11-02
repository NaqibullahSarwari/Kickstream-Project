import React from "react";
import clashofclansLogo from "../../public/clashofclans-logo.png";
import tubboLogo from "../../public/tubbo-logo.png";
import mayuwiiLogo from "../../public/Mayuwii-logo.png";
import Image from "next/image";

const LiveChannels = () => {
  const channels = [
    {
      id: 1,
      logo: clashofclansLogo,
      name: "ClashOfClans",
      viewers: "12k",
      alt: "Clash of clans Logo"
    },
    {
      id: 2,
      logo: tubboLogo,
      name: "Tubbo",
      viewers: "2.3m",
      alt: "Tubbo Logo"
    },
    {
      id: 3,
      logo: mayuwiiLogo,
      name: "Mayuwii",
      viewers: "12.3k",
      alt: "Mayuwii Logo"
    }
  ];

  return (
    <div className="pr-2">
      <h1 className="text-white font-semibold text-sm sm:text-md pt-4 pb-3">
        Live Channels
      </h1>
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
            <div className="flex justify-center items-center flex-shrink-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mr-1"></div>
              <h1 className="text-white text-xs sm:text-sm">{channel.viewers}</h1>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-[#A970FF] hover:text-white pt-3 text-xs sm:text-sm font-normal cursor-pointer transition-colors">
        Show More
      </h1>
    </div>
  );
};

export default LiveChannels;