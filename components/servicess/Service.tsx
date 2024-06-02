import React from "react";
import { Element } from "react-scroll";
import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import Categories from "./Categories";

const Service = () => {
  return (
    <div className="w-full my-40 h-auto flex flex-col justify-cebter items-center">
      {/* <Element id="services" name="services"></Element>; */}
      <p className="text-sm uppercase text-gray-400">My Skills</p>
      <h1 className="text-indigo-900 text-5xl font-bold text-center">
        My Expertise
      </h1>
      <Categories />
    </div>
  );
};

export default Service;
