import Link from "next/link";
import { BsGithub, BsLinkedin, BsSun, BsTwitterX } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";

export const NavBar = () => {
  // #3F64E9 (Blue)
  // #E93F3F (Red)
  // #FFB800 (Yellow)

  return (
    <>
      <nav className="h-64 w-screen px-24">
        <div className="z-1 absolute h-full w-[80%] translate-y-[-75%] justify-center overflow-x-hidden rounded-full bg-gradient-to-r from-[#3F64E9]/30 via-[#E93F3F]/30 to-[#FFB800]/30 blur-[150px]"></div>
        <div className="text-lightGray m-2 flex w-full items-center justify-between rounded-md bg-[#18181D] bg-opacity-30 p-6 text-sm">
          <div className="flex gap-10">
            <Link href="#about">About</Link>
            <Link href="#about">Projects</Link>
            <Link href="#about">Stack</Link>
            <Link href="#about">Contact</Link>
          </div>
          <div className="flex gap-5">
            <BsLinkedin size={20} />
            <BsTwitterX size={20} className="fill-black" />
            <BsGithub size={20} />
            <RxDividerVertical size={20} className="text-white/25" />
            <BsSun size={20} />
          </div>
        </div>
      </nav>
    </>
  );
};
