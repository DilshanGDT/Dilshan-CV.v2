import React from "react";
import { Element } from "react-scroll";
import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";

const Service = () => {
  return;
  <Element id="services" name="services">
    <div className="w-full my-40 h-auto flex flex-col justify-cebter items-center">
      <p className="text-sm uppercase text-gray-400">My Skills</p>
      <h1 className="text-indigo-900 text-xl font-bold text-center">
        My Expertise
      </h1>
      <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justifu-center items-center cursor-pointer">
            <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
            <h2 className="text-xl text-indigo-600 font-semibold">
              Strategy & Direction
            </h2>
          </div>
        </div>
      </div>
    </div>
  </Element>;
};

export default Service;
