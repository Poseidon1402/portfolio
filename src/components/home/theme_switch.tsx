"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitch = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme == "dark") {
    return (
      <FiSun
        onClick={() => setTheme("light")}
        size={24}
        className={`${className} cursor-pointer`}
      />
    );
  } else {
    return (
      <FiMoon
        onClick={() => setTheme("dark")}
        size={24}
        className={`${className} cursor-pointer`}
      />
    );
  }
};
