"use client";
import { Link } from "react-scroll";

export const GetInTouchButton = () => {
  return (
    <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-gray-800 to-black p-3 text-sm text-white shadow-md transition-shadow duration-300 hover:shadow-lg laptop:w-36">
      <Link to="contactMe" smooth duration={500}>
        Get in touch
      </Link>
    </button>
  );
};
