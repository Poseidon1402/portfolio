import Link from "next/link";
import { BsPerson, BsRocketTakeoff, BsTools } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

export const NavbarItems = () => {
  return (
    <>
      <div className="absolute bottom-0 flex w-[95%] justify-between rounded-2xl border border-[#27262C]/40 bg-[#18181D]/60 p-4 shadow-md backdrop-blur-md laptop:hidden">
        <Link href="#home">
          <BsPerson size={24} className="text-lightGray" />
        </Link>
        <Link href="#projects">
          <BsRocketTakeoff size={24} className="text-lightGray" />
        </Link>
        <Link href="#skills">
          <BsTools size={24} className="text-lightGray" />
        </Link>
        <Link href="#contactMe">
          <TfiEmail size={24} className="text-lightGray" />
        </Link>
      </div>
      <div className="my-2 hidden h-16 w-full items-center justify-center rounded-2xl border border-white/25 px-12 py-4 backdrop-blur-md laptop:flex">
        <ul className="flex gap-12">
          <li className="text-lg text-onyx">
            <Link href="#home">About</Link>
          </li>
          <li className="text-lg text-onyx">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="text-lg text-onyx">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="text-lg text-onyx">
            <Link href="#contactMe">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
