"use client";

import { Link } from "react-scroll";

type NavbarItemIconProps = {
  to: string;
  icon: JSX.Element;
};

export const NavbarItemIcon = ({ to, icon }: NavbarItemIconProps) => {
  return (
    <Link
      to={to}
      className="text-lightGray"
      smooth={true}
      duration={500}
      offset={-70}
      spy={true}
      activeClass="text-white font-semibold bg-onyx/50 p-2"
    >
      {icon}
    </Link>
  );
};
