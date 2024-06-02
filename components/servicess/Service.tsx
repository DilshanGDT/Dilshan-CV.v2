import React from "react";
import { Element } from "react-scroll";
import Categories from "./Categories";

const Service = () => {
  return (
    <div className="w-full my-40 h-auto flex flex-col justify-center items-center">
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
