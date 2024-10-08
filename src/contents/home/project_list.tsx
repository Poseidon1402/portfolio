"use client";

import { ProjectTile } from "@/components";
import { projects } from "@/data/my_data";
import { useState } from "react";

export const ProjectList = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-8 py-20 text-xl" id="projects">
      <p className="text-[32px] font-bold dark:text-white">Projects</p>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 tablet:grid-cols-2 desktop:grid-cols-3 TV:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            project={project}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
};
