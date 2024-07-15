import { Tool } from "@/data/my_data";

export const Stack = (tool: Tool) => {
  return (
    <div className="flex h-24 w-full items-center gap-4 rounded-3xl border border-[#EBEBEB] px-2 py-5">
      {tool.icon}
      <div className="flex w-full items-center justify-between">
        <p className="font-semibold">{tool.name}</p>
        <p className="text-end text-xs text-darkGray">{tool.type}</p>
      </div>
    </div>
  );
};
