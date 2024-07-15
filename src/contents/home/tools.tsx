import { Stack } from "@/components";
import { icons } from "@/assets";
import { tools } from "@/data/my_data";

export const Tools = () => {
  return (
    <div className="flex flex-col gap-4 py-8" id="skills">
      <p className="text-[32px] font-bold">Tech Stack</p>
      <p className="text-sm text-[#808080]/45">
        The dev tools, technologies and programming languages I use
      </p>
      <div className="TV: grid grid-cols-1 gap-4 laptop:grid-cols-2 desktop:grid-cols-3 TV:grid-cols-4">
        {tools.map((tool) => (
          <Stack key={tool.name} {...tool} />
        ))}
      </div>
    </div>
  );
};
