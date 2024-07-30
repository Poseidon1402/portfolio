import { BsPerson, BsRocketTakeoff, BsTools } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { NavBarItem, NavbarItemIcon, ThemeSwitch } from "@/components";
import { RxDividerVertical } from "react-icons/rx";

export const NavbarItems = () => {
  return (
    <>
      <div className="absolute bottom-0 flex w-[95%] justify-between rounded-2xl border border-[#27262C]/40 bg-[#18181D]/60 p-4 shadow-md backdrop-blur-md laptop:hidden">
        <NavbarItemIcon to="about" icon={<BsPerson size={24} />} />
        <NavbarItemIcon to="projects" icon={<BsRocketTakeoff size={24} />} />
        <NavbarItemIcon to="skills" icon={<BsTools size={24} />} />
        <NavbarItemIcon to="contactMe" icon={<TfiEmail size={24} />} />
        <RxDividerVertical size={24} className="text-lightGray" />
        <ThemeSwitch className="text-lightGray" />
      </div>
      <div className="fixed top-0 my-2 hidden h-16 items-center justify-center rounded-2xl border border-white/25 px-12 py-4 backdrop-blur-md laptop:flex">
        <ul className="flex gap-12">
          <NavBarItem label="About" section="about" />
          <NavBarItem label="Projects" section="projects" />
          <NavBarItem label="Skills" section="skills" />
          <NavBarItem label="Contact Me" section="contactMe" />
          <RxDividerVertical size={24} className="text-onyx/50" />
          <ThemeSwitch />
        </ul>
      </div>
    </>
  );
};
