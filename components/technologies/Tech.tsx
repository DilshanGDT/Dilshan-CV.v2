import React from "react";
import TechIcons from "./TechIcons";

const Tech = () => {
  return (
    <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
      <p className="text-sm uppercase text-gray-400">What i have learned</p>
      <h1 className="text-indigo-900 text-5xl font-bold text-center">
        Techonolgies
      </h1>
      <TechIcons />
    </div>
  );
};

export default Tech;
