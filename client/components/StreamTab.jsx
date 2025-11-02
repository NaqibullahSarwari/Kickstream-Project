"use client";
import React from "react";
import { Heart, Settings, MoreVertical, Users, Eye, Gift } from "lucide-react";

const StreamTab = ({ streamerData }) => {
  // Default streamer data if none provided
  const defaultStreamerData = {
    name: "Livvcore",
    isVerified: true,
    title: "AUNTIE IMMO RANKED",
    game: "VALORANT",
    tags: [
      "girlgamers",
      "girlstreaming",
      "Valo",
      "provalorant",
      "She",
      "Skyemain",
      "English",
      "valorant",
      "VALORANT",
      "Canada",
    ],
    followers: "52.4K",
    socialLinks: {
      youtube: "YOUTUBE",
      instagram: "INSTAGRAM",
      twitter: "X",
      tiktok: "TIK TOK",
    },
    goal: {
      title: "October",
      description: "Help me earn points to reach Plus Level 2",
      current: 108,
      target: 300,
    },
    viewerCount: "295",
    duration: "7:08:45",
  };

  const streamer = streamerData || defaultStreamerData;

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#0E0E10] w-full overflow-hidden">
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="relative bg-black aspect-video">
          <video
            className="w-full h-full object-cover"
            controls
            poster="/cocwallpaper.jpg"
          >
            <source src="#" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-4 right-4 flex items-center space-x-2">
            <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs sm:text-sm flex items-center">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {streamer.viewerCount}
            </div>
            <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs sm:text-sm">
              {streamer.duration}
            </div>
            <Settings className="text-white w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
            <MoreVertical className="text-white w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          </div>
        </div>
        <div className="bg-[#18181B] p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
            <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base sm:text-lg">
                  L
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center">
                  <h1 className="text-white text-lg sm:text-xl font-bold truncate">
                    {streamer.name}
                  </h1>
                  {streamer.isVerified && (
                    <div className="ml-2 w-4 h-4 sm:w-5 sm:h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
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
                <h2 className="text-white text-base sm:text-lg truncate">
                  {streamer.title}
                </h2>
                <div className="flex items-center mt-1">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                    LIVE
                  </span>
                  <p className="text-gray-300 text-sm truncate">
                    {streamer.game}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto">
              <Heart className="text-white w-7 h-7 sm:w-8 sm:h-8 p-1 bg-[#34343B] hover:bg-[#414149] rounded cursor-pointer transition-colors" />
              <button className="bg-[#A970FF] hover:bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                Follow
              </button>
              <div className="flex items-center">
                <button className="bg-[#34343B] hover:bg-[#414149] text-white px-3 sm:px-4 py-2 rounded-l-lg font-semibold transition-colors flex items-center text-sm sm:text-base">
                  <Gift className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="hidden sm:inline">Gift a Sub</span>
                  <span className="sm:hidden">Gift</span>
                </button>
                <button className="bg-[#34343B] hover:bg-[#414149] text-white px-2 py-2 rounded-r-lg border-l border-gray-600 transition-colors">
                  ▼
                </button>
              </div>
              <button className="bg-[#34343B] hover:bg-[#414149] text-white px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                Subscribe
              </button>
              <MoreVertical className="text-white w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {streamer.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#34343B] hover:bg-[#414149] text-gray-300 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-[#18181B] p-3 sm:p-4 border-t border-gray-700">
          <h3 className="text-white text-base sm:text-lg font-bold mb-3">
            About {streamer.name}
          </h3>
          <div className="flex items-center mb-4">
            <Users className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-white font-semibold text-sm sm:text-base">
              {streamer.followers} followers
            </span>
          </div>
          <p className="text-gray-300 mb-4 text-sm sm:text-base break-words">
            Business Inquiries: {streamer.name.toLowerCase()}@lockedtalent.com
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md">
            {Object.entries(streamer.socialLinks).map(([platform, handle]) => (
              <div
                key={platform}
                className="flex items-center bg-[#34343B] hover:bg-[#414149] px-3 py-2 rounded cursor-pointer transition-colors"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded mr-3 flex-shrink-0"></div>
                <span className="text-white text-xs sm:text-sm">{handle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-96 bg-[#18181B] flex flex-col border-t lg:border-t-0 lg:border-l border-gray-700 max-h-[600px] lg:max-h-none">
        <div className="p-3 sm:p-4 border-b border-gray-700">
          <h3 className="text-white font-bold text-base sm:text-lg">
            Stream Chat
          </h3>
          <div className="flex items-center mt-2 text-xs sm:text-sm text-gray-400 overflow-x-auto">
            <span className="mr-4 whitespace-nowrap">👑 allina... 🎁 50</span>
            <span className="mr-4 whitespace-nowrap">🛡️ se... 🎁 40</span>
            <span className="whitespace-nowrap">👑 adrianv</span>
          </div>
        </div>
        <div className="bg-purple-600 p-3 m-3 sm:m-4 rounded-lg">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl mr-2">👑</span>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">
                Get cred when you share a viral clip!
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 sm:px-4 space-y-2">
          <div className="flex items-start space-x-2">
            <span className="text-gray-400 text-xs flex-shrink-0">7:39</span>
            <span className="text-yellow-400 font-bold text-xs sm:text-sm flex-shrink-0">
              amoneyxc:
            </span>
            <span className="text-white text-xs sm:text-sm break-words">
              WE TAKE THAT
            </span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-gray-400 text-xs flex-shrink-0">7:39</span>
            <span className="text-orange-400 font-bold text-xs sm:text-sm flex-shrink-0">
              🔸 👑 milikarose:
            </span>
            <span className="text-white text-xs sm:text-sm break-words">
              accidented the guy LMFAO
            </span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-gray-400 text-xs flex-shrink-0">7:39</span>
            <span className="text-pink-400 font-bold text-xs sm:text-sm flex-shrink-0">
              🌸 ProfessorVic:
            </span>
            <span className="text-white text-xs sm:text-sm break-words">
              idk I can't find u
            </span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-gray-400 text-xs flex-shrink-0">7:40</span>
            <span className="text-blue-400 font-bold text-xs sm:text-sm flex-shrink-0">
              ✅ 🤖 Nightbot:
            </span>
            <span className="text-white text-xs sm:text-sm break-all">
              Follow my socials IG: https://www.instagram.com/livvcotee/?hl=en
              // Tik Tok:
              https://www.tiktok.com/@livvcotee?witch?_t=7SsRvduVwXsVA8_r=1 //
              Twitter: https://twitter.com/livvcotee // Youtube:
              https://www.youtube.com/@livvcotee
            </span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-gray-400 text-xs flex-shrink-0">7:41</span>
            <span className="text-pink-400 font-bold text-xs sm:text-sm flex-shrink-0">
              🌸 ProfessorVic:
            </span>
            <span className="text-white text-xs sm:text-sm break-words">
              oh u know it's bad when that happens
            </span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-gray-400 text-xs flex-shrink-0">7:43</span>
            <span className="text-yellow-400 font-bold text-xs sm:text-sm flex-shrink-0">
              amoneyxc:
            </span>
            <span className="text-white text-xs sm:text-sm break-words">
              I'm gonna go make buldak I better not come back to a closed stream
              or hidden screen
            </span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-gray-400 text-xs flex-shrink-0">7:43</span>
            <span className="text-yellow-400 font-bold text-xs sm:text-sm flex-shrink-0">
              amoneyxc:
            </span>
            <span className="text-white text-xs sm:text-sm break-words">
              Ok? Ok
            </span>
          </div>

          <div className="text-center py-4">
            <span className="text-purple-400 text-xs sm:text-sm">
              Welcome to the chat room!
            </span>
          </div>
        </div>
        <div className="p-3 sm:p-4 border-t border-gray-700">
          <div className="flex items-center bg-[#34343B] rounded-lg">
            <input
              type="text"
              placeholder="Send a message"
              className="flex-1 bg-transparent text-white px-3 py-2 outline-none placeholder-gray-400 text-sm"
            />
            <div className="flex items-center px-2">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
            <span>💜 0 💎 0</span>
            <Settings className="w-4 h-4 cursor-pointer" />
          </div>
        </div>

        <div className="p-3 sm:p-4 border-t border-gray-700 bg-[#1a1a1d]">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-bold text-sm sm:text-base">
              Plus Goal
            </h4>
            <span className="text-gray-400 text-sm">ℹ️</span>
          </div>
          <div className="mb-2">
            <h5 className="text-white font-semibold text-sm sm:text-base">
              {streamer.goal.title}
            </h5>
            <p className="text-gray-300 text-xs sm:text-sm">
              {streamer.goal.description}
            </p>
          </div>
          <div className="bg-gray-700 rounded-full h-2 mb-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  (streamer.goal.current / streamer.goal.target) * 100
                }%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-white">{streamer.goal.current}</span>
            <span className="text-gray-400">{streamer.goal.target}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamTab;
