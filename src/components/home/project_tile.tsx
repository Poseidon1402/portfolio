import { images } from "@/assets";
import { Project } from "@/data/my_data";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export const ProjectTile = (project: Project) => {
  return (
    <div className="flex h-[600px] flex-col rounded-3xl border border-[#EBEBEB] bg-[#F6F6F6]">
      <Image
        src={images.model}
        alt="model"
        className="h-1/2 w-full basis-1 rounded-t-3xl"
      />
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-onyx">{project.name}</h1>
          <p className="text-sm text-darkGray">{project.description}</p>
          <p className="text-sm text-darkGray">
            Tech stack :{" "}
            <span className="font-semibold">HTML, JavaScript, SASS</span>
          </p>
        </div>
        <div className="flex items-center gap-2 self-end">
          <BsGithub />
          <p className="text-xs underline">Source code</p>
        </div>
      </div>
    </div>
  );
};
