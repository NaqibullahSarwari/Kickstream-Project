import React from "react";
import {
  MessageCircle,
  Key,
  Users,
  Camera,
  ArrowLeft,
  Clapperboard,
  Focus,
} from "lucide-react";
import Link from "next/link"
import Navbar from ""

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#0E0E10]">
        <aside className="bg-[#0E0E10] space-y-6 pl-8 pt-8 w-1/5 h-screen border-r-3 border-white">
          <div className="hover:text-gray-300">
            <Link href="/dashboard/analytics" className="flex items-center space-x-4">
            <Camera />
            <button className="text-white text-lg font-semibold hover:text-gray-300">
              Dashboard
            </button>
            <ArrowLeft className="text-white" />
            </Link>
          </div>
          <div className="hover:text-gray-300">
           <Link href="/dashboard/golive" className="flex items-center space-x-4">
           <Clapperboard />
            <button className="text-white text-lg font-semibold hover:text-gray-300">
              Go Live
            </button>
           </Link>
          </div>
          <div className="flex items-center space-x-4 hover:text-gray-300">
          <Link href="/dashboard/stream" className="flex items-center space-x-4">
          <Focus className=""/>
            <button className="text-white text-lg font-semibold hover:text-gray-300">
             Stream
            </button>
          </Link>
          </div>
          <div className="hover:text-gray-300">
          <Link href="/dashboard/keys" className="flex items-center space-x-4">
          <Key />
          <button className="text-white text-lg font-semibold hover:text-gray-300">Keys</button>
          </Link>
          </div>
          <div className="hover:text-gray-300">
           <Link href="/dashboard/chat" className="flex items-center space-x-4">
           <MessageCircle />
           <button className="text-white text-lg font-semibold hover:text-gray-300">Chat Setting</button>
           </Link>
          </div>
          <div className="hover:text-gray-300">
            <Link href="/dashboard/community" className="flex items-center space-x-4">
            <Users />
            <button className="text-white text-lg font-semibold hover:text-gray-300">
              Community
            </button>
            </Link>
          
          </div>
        </aside>
        <div></div>
      </div>
    </>
  );
};

export default Dashboard;
