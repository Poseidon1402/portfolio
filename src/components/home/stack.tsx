import { Tool } from "@/data/my_data";

export const Stack = (tool: Tool) => {
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-3xl border border-[#EBEBEB] bg-faintWhite px-4 py-5 laptop:aspect-square laptop:flex-col">
      <div className="flex flex-1 items-center">{tool.icon}</div>
      <div className="flex w-full items-center justify-between">
        <p className="text-xs font-medium">{tool.name}</p>
        <p className="text-end text-xs text-darkGray">{tool.type}</p>
      </div>
    </div>
  );
};
