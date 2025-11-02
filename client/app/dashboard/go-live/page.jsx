"use client";
import React from "react";

const GoLivePage = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
        Go Live
      </h1>
      <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg max-w-3xl">
        <p className="text-gray-300 mb-4 text-sm sm:text-base">
          Ready to start streaming?
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-base sm:text-lg transition-colors text-white w-full sm:w-auto">
          Start Stream
        </button>
      </div>
    </div>
  );
};

export default GoLivePage;
