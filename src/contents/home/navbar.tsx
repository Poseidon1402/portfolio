"use client";

import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { NavbarItems } from "./navbar_items";

export const NavBar = () => {
  // #3F64E9 (Blue)
  // #E93F3F (Red)
  // #FFB800 (Yellow)

  const [expanded, setExpanded] = useState(false);

  const updateSidebar = () => {
    console.log("pushed");
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [expanded]);

  return (
    <>
      <div>
        <div
          className={`fixed z-20 flex h-screen w-full flex-col bg-white p-5 transition-transform duration-500 ease-in-out laptop:hidden ${
            expanded ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="self-end" onClick={updateSidebar}>
            <CgClose color="black" size={24} />
          </button>
          <div className="gap flex h-screen flex-col justify-between px-3">
            <NavbarItems />
            <div className="flex flex-col content-end gap-5">
              <p className="text-center text-sm text-black/50">
                2024 @ Copyright Aina
              </p>
            </div>
          </div>
        </div>
        <nav className="h-64 w-screen px-12">
          <div className="z-1 absolute h-full w-[80%] translate-y-[-75%] rounded-full bg-gradient-to-r from-[#3F64E9]/30 via-[#E93F3F]/30 to-[#FFB800]/30 blur-[150px]"></div>
          <div className="flex w-full justify-between pt-8">
            <h1>Portfolio</h1>
            <button onClick={updateSidebar}>
              <BiMenu size={20} />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
