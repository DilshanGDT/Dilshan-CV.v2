"use client";

import React from "react";
//import Link from "next/link";
//import { transition } from "@headlessui/react"; // for smooth transitions
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div>
      {/* Tagline */}
      <nav className="fixed z-20 bg-white w-full"></nav>
      {/* Second entire div */}
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center sm:mx-20 md:mx-20 justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0">
              <h1 className="font-bold text-xl cursor-pointer">
                My E-<span className="text-blue-600">portfolio</span>
              </h1>
            </div>
            <div className="hidden md:block">
              {/* Navbar Links */}
              <NavLinks />
            </div>
            {/* Direcr contact via Email */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
