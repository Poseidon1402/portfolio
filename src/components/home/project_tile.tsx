import { Project } from "@/data/my_data";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export const ProjectTile = (project: Project) => {
  return (
    <div className="flex h-[625px] transform cursor-pointer flex-col rounded-3xl border border-[#EBEBEB] bg-[#F6F6F6] transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:border-[#272525] dark:bg-onyx">
      <Image
        src={project.image}
        alt="model"
        className="h-1/2 w-full rounded-t-3xl object-cover"
      />
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold text-onyx dark:text-white">
            {project.name}
          </h1>
          <p className="text-xs text-darkGray desktop:text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-darkGray bg-onyx px-3 py-1 text-xs font-semibold text-white dark:border-[#272525]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.sourceCode && (
          <div className="flex items-center gap-2 self-end">
            <BsGithub className="text-lg dark:text-white" />
            <a
              href={project.sourceCode}
              target="_blank"
              className="text-xs text-onyx underline hover:text-darkGray dark:text-white"
            >
              Source code
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
