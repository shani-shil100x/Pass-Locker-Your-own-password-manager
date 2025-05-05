import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0f172a] z-2 text-white px-6 py-3 flex justify-between items-center border-b fixed top-0 ">
      <div className="text-xl font-bold">
        <span className="text-gray-400">&lt;</span>
        Pass
        <span className=" text-gray-400">-Locker/&gt;</span>
      </div>
      <a
        href="https://github.com/shani-shil100x/Pass-Locker-Your-own-password-manager"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="ring-white ring-1 flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-4 py-1 pl-1 rounded-full transition duration-200">
          <img src="icons/github.svg" alt="GitHub" className=" invert w-6" />
          GitHub
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
