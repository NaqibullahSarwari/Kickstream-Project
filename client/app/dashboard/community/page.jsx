"use client";
import React from "react";

const page = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
        Community
      </h1>
      <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg max-w-3xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">
          Your Community
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Manage your followers, moderators, and banned users.
        </p>
      </div>
    </div>
  );
};

export default page;
