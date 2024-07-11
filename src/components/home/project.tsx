import { images } from "@/assets";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export const Project = () => {
  return (
    <div className="flex h-[500px] flex-col rounded-3xl border border-[#EBEBEB] bg-[#F6F6F6]">
      <Image
        src={images.model}
        alt="model"
        className="h-1/2 w-full basis-1 rounded-t-3xl"
      />
      <div className="flex h-1/2 flex-col justify-between p-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-onyx">Project Tile goes here</h1>
          <p className="text-sm text-darkGray">
            This is sample project description random things are here in
            description This is sample project lorem ipsum generator for dummy
            content
          </p>
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
