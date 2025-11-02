"use client";
import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex justify-center">
      <Link href="/dashboard">
        <button className="text-white font-semibold text-xs sm:text-sm bg-[#34343B] hover:bg-[#46464f] rounded-3xl h-8 sm:h-9 px-3 sm:px-4 md:px-6 transition-colors">
          <span className="hidden md:inline">Dashboard</span>
          <span className="md:hidden">Dash</span>
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
