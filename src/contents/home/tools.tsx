import { LinkPreview, Stack } from "@/components";
import { tools } from "@/data/my_data";

export const Tools = () => {
  return (
    <div className="flex flex-col gap-4 py-8" id="skills">
      <p className="text-[32px] font-bold dark:text-white">Tools</p>
      <p className="text-sm text-[#808080]/45">
        The dev tools, technologies and programming languages that I use
      </p>
      <div className="TV: grid grid-cols-1 gap-4 laptop:grid-cols-2 desktop:grid-cols-4 TV:grid-cols-5">
        {tools.map((tool, index) => (
          <LinkPreview url={tool.website} key={index}>
            <Stack key={tool.name} {...tool} />
          </LinkPreview>
        ))}
      </div>
    </div>
  );
};
