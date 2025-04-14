"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

function InputeSearch() {
  return (
    <div className="flex items-center bg-[#292D35] w-1/3 border-2 border-gray-400 rounded-t-md rounded-b-none">
      <div className="bg-white p-3 rounded-md flex-shrink-0 rounded-t-md rounded-b-none rounded-tr-none">
        <FaSearch className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="بحث"
        className="bg-transparent outline-none text-white w-full text-right ml-2 p-2"
      />
    </div>
  );
}

export default InputeSearch;
