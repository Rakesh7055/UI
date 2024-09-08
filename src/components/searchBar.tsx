import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex items-center hover:border-primary border-2 rounded-full bg-input pl-4 font-normal h-fit py-1.5">
      <input
        type="text"
        placeholder="Search"
        className=" bg-transparent outline-0"
      />
      <IoIosSearch size={24} className=" text-muted-foreground mx-2" />
    </div>
  );
};

export default SearchBar;
