import { Stack } from "@/components";
import { icons } from "@/assets";

export const Tools = () => {
  return (
    <div className="flex flex-col gap-4 px-12 py-8" id="skills">
      <p className="text-[32px] font-bold">Tech Stack</p>
      <p className="text-sm text-[#808080]/45">
        The dev tools, technologies and programming languages I use
      </p>
      <div className="grid gap-4">
        <Stack
          icon={<icons.Flutter />}
          label="Flutter"
          type="Mobile Framework"
        />
      </div>
    </div>
  );
};
