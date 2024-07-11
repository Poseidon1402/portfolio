import { NextJS } from "@/assets";
import { Stack } from "@/components";

export const Tools = () => {
  return (
    <div className="flex flex-col gap-4 px-12 py-8">
      <p className="text-[32px] font-bold">Tech Stack</p>
      <p className="text-sm text-[#808080]/45">
        The dev tools, technologies and programming languages I use
      </p>
      <div className="grid gap-4">
        <Stack icon={<NextJS />} label="Next.js" type="Web Framework" />
        <Stack icon={<NextJS />} label="Next.js" type="Web Framework" />
        <Stack icon={<NextJS />} label="Next.js" type="Web Framework" />
        <Stack icon={<NextJS />} label="Next.js" type="Web Framework" />
      </div>
    </div>
  );
};
