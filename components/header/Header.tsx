import React from "react";
import Image from "next/image";
import heroImage from "@/public/hero.png";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
        <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
          <Image
            src={heroImage}
            alt="heroImage"
            layout="fill"
            objectFit="cover"
            className="rounded-full cursor-pointer hidden md:block"
          ></Image>
        </div>
        <div className="flex flex-col md:ml-20 mx-10 mt-10">
          <h1 className="font-bold text-7xl text-left mb-5">
            Hello, I am <span className="text-indigo-900">Dilshan</span>
          </h1>
          <p className="text-left font-normal mb-5 flex-wrap">
            A Front-End Web Developer pursuing a BSc Honors in Computer Science
            at the University of Peradeniya. I enhance brand aesthetics and user
            experiences for my sister's business, inspired by my drawing
            background. As Cooperation Coordinator at CSUP, I hone my
            collaborative and leadership skills, aiming to bring innovative
            solutions to the tech field.
          </p>
          <a
            href="https://drive.google.com/file/d/1BCutzzACHzIXZLCphUttQmNEkqfQv65g/view?usp=sharing"
            className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black"
          >
            See my Resume
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Header;
