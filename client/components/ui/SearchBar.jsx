import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex justify-end">
      <input
        type="search"
        placeholder="Search"
        className="text-gray-300 pl-4 font-md bg-[#18181B] outline-none border-2 border-gray-300 h-10 w-90 rounded-tl-lg rounded-bl-lg"
      />
      <div className="bg-[#34343B] h-10 w-10 flex justify-center items-center rounded-br-lg rounded-tr-lg">
        <Search className="text-white" size={30} />
      </div>
    </div>
  );
};

export default SearchBar;
