import { NavbarItems } from "./navbar_items";

export const NavBar = () => {
  // #3F64E9 (Blue)
  // #E93F3F (Red)
  // #FFB800 (Yellow)

  return (
    <>
      <div className="fixed bottom-8 right-0 z-50 flex w-full justify-center laptop:sticky laptop:top-0">
        <nav className="flex h-24 w-full justify-center">
          <div className="z-1 absolute hidden h-96 w-[80%] translate-y-[-75%] rounded-full bg-white/25 bg-gradient-to-r from-[#3F64E9]/30 via-[#E93F3F]/30 to-[#FFB800]/30 blur-[150px] laptop:block"></div>
          <NavbarItems />
        </nav>
      </div>
    </>
  );
};
