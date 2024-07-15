import { BsPerson, BsRocketTakeoff, BsTools } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { NavbarItems } from "./navbar_items";

export const NavBar = () => {
  // #3F64E9 (Blue)
  // #E93F3F (Red)
  // #FFB800 (Yellow)

  return (
    <>
      <div className="flex justify-center">
        <nav className="fixed bottom-8 h-16 w-full px-12">
          <div className="z-1 absolute hidden h-full w-[80%] translate-y-[-75%] rounded-full bg-gradient-to-r from-[#3F64E9]/30 via-[#E93F3F]/30 to-[#FFB800]/30 blur-[150px]"></div>
          <NavbarItems />
        </nav>
      </div>
    </>
  );
};
