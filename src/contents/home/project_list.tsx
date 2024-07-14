import { Project } from "@/components";

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-8 px-12 py-20 text-xl" id="projects">
      <p className="text-[32px] font-bold">Projects</p>
      <Project />
      <Project />
    </div>
  );
};
