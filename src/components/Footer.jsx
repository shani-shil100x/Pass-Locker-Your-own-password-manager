import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-2 fixed bottom-0 w-full">
      <div className="flex flex-col items-center">
        <div className="text-md font-bold">
          <span className="text-gray-500">&lt;</span>
          <span className="text-white">Pass</span>
          <span className="text-gray-500">-Locker/&gt;</span>
        </div>
        <span className="text-[14px]">Created with ❤️ by Shani</span>
      </div>
    </footer>
  );
};

export default Footer;
