import React from "react";
import { Link } from "react-scroll"; // for smooth scroll throughout the page

const NavLinks = () => {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      <Link
        activeClass="Home"
        to="home"
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer text-blue-600 px-3 py-2 text-md"
      >
        Home
      </Link>
      <Link
        activeClass="Services"
        to="Services"
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
      >
        Services
      </Link>
      <Link
        activeClass="Works"
        to="Works"
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
      >
        Works
      </Link>
      <Link
        activeClass="Client"
        to="Client"
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
      >
        Client
      </Link>
      <Link
        activeClass="Contacts"
        to="Contacts"
        smooth={true}
        offset={50}
        duration={500}
        className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
      >
        Contacts
      </Link>
    </div>
  );
};

export default NavLinks;
