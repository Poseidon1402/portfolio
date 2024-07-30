import { Tool } from "@/data/my_data";
import Link from "next/link";

export const Stack = (tool: Tool) => {
  return (
    <Link
      href={tool.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-between gap-4 rounded-3xl border border-[#EBEBEB] bg-faintWhite px-2 py-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:border-[#383737] dark:bg-onyx laptop:aspect-square laptop:flex-col laptop:justify-center laptop:gap-6"
    >
      <div className="text-primary flex flex-1 items-center justify-center text-4xl laptop:mb-2 laptop:text-6xl">
        {tool.icon}
      </div>
      <div className="flex w-full flex-col items-center justify-between text-center laptop:w-full laptop:flex-row laptop:items-center laptop:justify-between">
        <p className="text-sm font-medium text-darkGray dark:text-white laptop:text-xs">
          {tool.name}
        </p>
        <p className="rounded-full p-1 text-xs text-gray-500 laptop:text-[9px] laptop:dark:border laptop:dark:border-[#272525]">
          {tool.type}
        </p>
      </div>
    </Link>
  );
};
