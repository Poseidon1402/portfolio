import { ProjectTile } from "@/components";
import { projects } from "@/data/my_data";

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-8 px-12 py-20 text-xl" id="projects">
      <p className="text-[32px] font-bold">Projects</p>
      {projects.map((project) => (
        <ProjectTile key={project.name} {...project} />
      ))}
    </div>
  );
};
