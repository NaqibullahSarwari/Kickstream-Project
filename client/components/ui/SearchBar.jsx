"use client"
import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex justify-end">
      <input
        type="search"
        placeholder="Search"
        className="text-gray-300 pl-3 sm:pl-4 text-sm sm:text-base font-md bg-[#18181B] outline-none border-2 border-gray-300 h-10 w-32 sm:w-48 md:w-64 lg:w-90 rounded-tl-lg rounded-bl-lg"
      />
      <div className="bg-[#34343B] hover:bg-[#46464f] h-10 w-10 flex justify-center items-center rounded-br-lg rounded-tr-lg transition-colors cursor-pointer">
        <Search className="text-white" size={24} />
      </div>
    </div>
  );
};

export default SearchBar;
