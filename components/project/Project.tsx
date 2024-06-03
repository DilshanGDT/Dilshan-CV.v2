import React from "react";
import Image from "next/image";
import ProjectImage from "@/public/project.png";

const Project = () => {
  return (
    <div className="w-full my-40 h-auto flex flex-col justify-center items-center">
      <p className="text-sm uppercase text-gray-400">Portfolio</p>
      <h1 className="text-indigo-900 text-5xl font-bold text-center">
        My Works
      </h1>
      <div className="pt-10 md:flex sm:flex-col md:flex-row justify-center items-start  md:gap-10 sm:pb-10 mt-10">
        <div className="rounded w-96 h-60 shadow-xl relative">
          <Image
            src={ProjectImage}
            alt="ProjectImage"
            layout="fill"
            objectFit="cover"
            className="p-2 rounded cursor-pointer"
          ></Image>
        </div>
        <div className="rounded w-96 h-60 shadow-xl relative">
          <Image
            src={ProjectImage}
            alt="ProjectImage"
            layout="fill"
            objectFit="cover"
            className="p-2 rounded cursor-pointer"
          ></Image>
        </div>
        <div className="rounded w-96 h-60 shadow-xl relative">
          <Image
            src={ProjectImage}
            alt="ProjectImage"
            layout="fill"
            objectFit="cover"
            className="p-2 rounded cursor-pointer"
          ></Image>
        </div>
      </div>
      <p className="text-lg text-gray-400">
        Discover all in my
        <span className="text-indigo-900 font-bold text-center">
          <a
            href="https://github.com/DilshanGDT"
            className="cursor-pointer hover:text-black"
          >
            {" "}
            GitGub
          </a>
        </span>
      </p>
    </div>
  );
};

export default Project;
