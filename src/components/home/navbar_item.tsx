"use client";

import { Link, animateScroll as scroll } from "react-scroll";

type NavBarItemProps = {
  label: string;
  section: string;
};

export const NavBarItem = ({ label, section }: NavBarItemProps) => {
  return (
    <li className="text-lg text-onyx transition-colors duration-300">
      <Link
        to={section}
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        className="cursor-pointer rounded-lg hover:bg-onyx/50 hover:p-2 hover:text-white"
        activeClass="text-white font-semibold bg-onyx/50 p-2"
      >
        {label}
      </Link>
    </li>
  );
};
