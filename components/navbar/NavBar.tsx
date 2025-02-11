"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react"; // for smooth transitions
import NavLinks from "./NavLinks";
import EmailContact from "./EmailContact";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Tagline */}
      <nav className="fixed z-20 bg-white w-full">
        {/* Second entire div */}
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center sm:mx-20 md:mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer">
                  Tharaka <span className="text-blue-600">Dilshan</span>
                </h1>
              </div>
              <div className="hidden md:block">
                {/* Navbar Links */}
                <NavLinks />
              </div>
              {/* Direct contact via Email */}
              <EmailContact />
            </div>
            {/* Desktop size done. Mobile size structure.*/}
            <div className="mr-14 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main Menu</span>
                {/* Menu Functionality */}
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M44 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Div smooth transitions*/}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
              >
                <Link
                  href="/home"
                  activeClass="Home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-blue block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/Services"
                  activeClass="Services"
                  to="Services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-blue block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/Works"
                  activeClass="Works"
                  to="Works"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-blue block px-3 py-2 rounded-md text-base font-medium"
                >
                  Works
                </Link>
                <Link
                  href="/Client"
                  activeClass="Client"
                  to="Client"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-blue block px-3 py-2 rounded-md text-base font-medium"
                >
                  Client
                </Link>
                <Link
                  href="/Contacts"
                  activeClass="Contacts"
                  to="Contacts"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-blue block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contacts
                </Link>
                <Link
                  href="/hi"
                  activeClass="hi"
                  to="hi"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-blue block px-3 py-2 rounded-md text-base font-medium"
                >
                  Say<span className="text-black">hi</span>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default NavBar;
