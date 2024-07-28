import { Tool } from "@/data/my_data";
import Link from "next/link";

export const Stack = (tool: Tool) => {
  return (
    <Link
      href={tool.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-between gap-4 rounded-3xl border border-[#EBEBEB] bg-faintWhite px-4 py-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg laptop:aspect-square laptop:flex-col laptop:justify-center laptop:gap-6"
    >
      <div className="text-primary flex flex-1 items-center justify-center text-4xl laptop:mb-2 laptop:text-6xl">
        {tool.icon}
      </div>
      <div className="flex w-full flex-col items-center justify-between text-center laptop:w-auto laptop:items-start">
        <p className="text-sm font-medium text-darkGray laptop:text-base">
          {tool.name}
        </p>
        <p className="text-xs text-gray-500 laptop:text-sm">{tool.type}</p>
      </div>
    </Link>
  );
};
