"use client";

import { Link } from "react-scroll";
import { BsPerson, BsRocketTakeoff, BsTools } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { NavBarItem } from "@/components";

export const NavbarItems = () => {
  return (
    <>
      <div className="absolute bottom-0 flex w-[95%] justify-between rounded-2xl border border-[#27262C]/40 bg-[#18181D]/60 p-4 shadow-md backdrop-blur-md laptop:hidden">
        <Link to="about">
          <BsPerson size={24} className="text-lightGray" />
        </Link>
        <Link to="projects">
          <BsRocketTakeoff size={24} className="text-lightGray" />
        </Link>
        <Link to="skills">
          <BsTools size={24} className="text-lightGray" />
        </Link>
        <Link to="contactMe">
          <TfiEmail size={24} className="text-lightGray" />
        </Link>
      </div>
      <div className="fixed top-0 my-2 flex h-16 w-full items-center justify-center rounded-2xl border border-white/25 px-12 py-4 backdrop-blur-md laptop:flex">
        <ul className="flex gap-12">
          <NavBarItem label="About" section="about" />
          <NavBarItem label="Projects" section="projects" />
          <NavBarItem label="Skills" section="skills" />
          <NavBarItem label="Contact Me" section="contactMe" />
        </ul>
      </div>
    </>
  );
};
