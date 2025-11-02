"use client";
import Image from "next/image";
import Link from "next/link";
import aotThumbnail from "../public/aot-thumbnail.png";
import clashOfClansLogo from "../public/cocwallpaper.jpg";
import mayuwiiLogo from "../public/Mayuwii.jpg";
import tubboLogo from "../public/tubbo-logo.png";

const StreamCard = () => {
  const streams = [
    {
      id: 1,
      thumbnail: aotThumbnail,
      isLive: true,
      viewerCount: "278 viewers",
      title: "AUNTIE IMMO RANKED",
      streamer: "Livvcore",
      slug: "livvcore",
      isVerified: true,
      game: "VALORANT",
      tags: ["Canada", "VALORANT", "English"],
    },
    {
      id: 2,
      thumbnail: clashOfClansLogo,
      isLive: true,
      viewerCount: "85 viewers",
      title: "🌮 TACO HUNTS GHOSTS 👻 PHAS BI...",
      streamer: "SpookyTimePizza",
      slug: "spookytimepizza",
      isVerified: true,
      game: "Phasmophobia",
      tags: ["Phasmophobia", "Pizza", "Chaotic"],
    },
    {
      id: 3,
      thumbnail: mayuwiiLogo,
      isLive: true,
      viewerCount: "155 viewers",
      title: "playing Cabin Factory!!! 18+ !socials ...",
      streamer: "charlottemunster",
      slug: "charlottemunster",
      isVerified: false,
      game: "The Cabin Factory",
      tags: ["booba", "spotthedifference", "Tattoos"],
    },
    {
      id: 4,
      thumbnail: tubboLogo,
      isLive: true,
      viewerCount: "6K viewers",
      title: "THE MOST HORRIBLE STREAMER IS ...",
      streamer: "Ironmouse",
      slug: "ironmouse",
      isVerified: true,
      game: "Just Chatting",
      tags: ["PuertoRico", "vtuber", "latino"],
    },
  ];

  const SingleStreamCard = ({ stream }) => {
    return (
      <Link href={`/${stream.slug}`} className="block">
        <div className="bg-[#18181B] rounded-lg overflow-hidden w-full hover:bg-[#1f1f23] transition-colors duration-200 cursor-pointer">
          <div className="relative group">
            <Image
              src={stream.thumbnail}
              alt={stream.title}
              className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {stream.isLive && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                LIVE
              </div>
            )}
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              {stream.viewerCount}
            </div>
          </div>
          <div className="p-3">
            <h3 className="text-white text-sm font-medium mb-2 line-clamp-2 hover:text-[#A970FF] transition-colors duration-200">
              {stream.title}
            </h3>
            <div className="flex items-center mb-2">
              <p className="text-gray-300 text-sm hover:text-[#A970FF] transition-colors duration-200 truncate">
                {stream.streamer}
              </p>
              {stream.isVerified && (
                <div className="ml-1 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <p className="text-gray-400 text-sm mb-3 hover:text-[#A970FF] transition-colors duration-200 truncate">
              {stream.game}
            </p>
            <div className="flex flex-wrap gap-1">
              {stream.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#34343B] hover:bg-[#414149] text-gray-300 text-xs px-2 py-1 rounded transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="bg-[#0E0E10] p-4 sm:p-6">
      <h2 className="text-white text-base sm:text-lg font-semibold mb-4">
        Live channels we think you'll like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {streams.map((stream) => (
          <SingleStreamCard key={stream.id} stream={stream} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-[#A970FF] text-sm font-medium hover:text-white transition-colors duration-200">
          Show more ▼
        </button>
      </div>
    </div>
  );
};

export default StreamCard;