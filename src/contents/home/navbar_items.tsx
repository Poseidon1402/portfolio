import Link from "next/link";
import { BsPerson, BsRocketTakeoff, BsTools } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

export const NavbarItems = () => {
  return (
    <div className="mt-3 flex w-full justify-between rounded-2xl border border-[#27262C]/40 bg-[#18181D]/60 p-5 laptop:hidden">
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
  );
};
