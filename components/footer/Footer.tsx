import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer bg-white items-center p-4 text-neutral-content px-60">
      <aside className="items-center grid-flow-col">
        <p>Copyright © {today.getFullYear()} - All right reserved</p>
      </aside>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
