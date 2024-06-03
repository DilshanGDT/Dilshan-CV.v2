import React from "react";
import {
  FaNode,
  FaReact,
  FaJava,
  FaGithub,
  FaAws,
  FaPython,
} from "react-icons/fa";

const TechIcons = () => {
  return (
    <div className="flex justify-between text-center mx-20 my-10 md:gap-10 gap-2">
      <div className="flex justify-center items-center cursor-pointer">
        <FaPython className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        <FaNode className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        <FaReact className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        <FaJava className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        <FaAws className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
      </div>
    </div>
  );
};

export default TechIcons;
