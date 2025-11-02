import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex justify-around space-x-4 mr-3">
      <div className="flex justify-center rounded-3xl">
        <Link href="/dashboard">
          <button className="text-white font-semibold text-sm bg-[#34343B] hover:bg-[#46464f] rounded-3xl h-9 w-27 ">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
