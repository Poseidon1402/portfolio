"use client";
import { Link } from "react-scroll";

export const GetInTouchButton = () => {
  return (
    <Link to="contactMe" smooth duration={500}>
      <button className="animate-shimmer mt-5 w-full rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-3 text-sm text-white shadow-md transition-colors duration-300 laptop:w-36">
        Get in touch
      </button>
    </Link>
  );
};
