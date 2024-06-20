import React from "react";
import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";

const Categories = () => {
  return (
    <div>
      <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justifu-center items-center cursor-pointer">
            <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
            <h2 className="text-xl text-indigo-600 font-semibold">
              Web Developing
            </h2>
          </div>
          <p className="md:text-base text-gray-400 md:text-justify sm:text-left sm:text-sm">
            As a Computer Science honors student passionate about web
            development, learning cutting-edge technologies, and building
            innovative and suitable web solutions.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justifu-center items-center cursor-pointer">
            <HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
            <h2 className="text-xl text-indigo-600 font-semibold">
              Graphic Designing
            </h2>
          </div>
          <p className="md:text-base text-gray-400 md:text-justify sm:text-left sm:text-sm">
            Passionate graphic designer skilled in creating visually stunning
            and impactful designs. Dedicated to enhancing brand identity and
            user experience.
          </p>
        </div>
      </div>
      <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justifu-center items-center cursor-pointer">
            <AiOutlineBlock className="w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
            <h2 className="text-xl text-indigo-600 font-semibold">
              Project Management
            </h2>
          </div>
          <p className="md:text-base text-gray-400 md:text-justify sm:text-left sm:text-sm">
            Experienced project manager adept at leading teams, managing
            resources, and ensuring project success through effective planning
            and execution. Specialized in AGILE.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justifu-center items-center cursor-pointer">
            <MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
            <h2 className="text-xl text-indigo-600 font-semibold">
              Team Collaboration
            </h2>
          </div>
          <p className="md:text-base text-gray-400 md:text-justify sm:text-left sm:text-sm">
            Enthusiastic collaborator focused on fostering teamwork, enhancing
            communication, and achieving collective goals through strong
            interpersonal skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
