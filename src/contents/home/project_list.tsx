import { ProjectTile } from "@/components";
import { projects } from "@/data/my_data";

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-8 py-20 text-xl" id="projects">
      <p className="text-[32px] font-bold">Projects</p>
      <div className="grid grid-cols-1 gap-x-2 gap-y-8 tablet:grid-cols-2 desktop:grid-cols-3 TV:grid-cols-4">
        {projects.map((project) => (
          <ProjectTile key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
