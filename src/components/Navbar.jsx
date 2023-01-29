import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full z-[100] absolute ">
      <h1 className="text-[#1F80E0] text-4xl font-bold cursor-pointer">
        WATCHER
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-[#1F80E0] text-white px-4 py-1 rounded-2xl">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
