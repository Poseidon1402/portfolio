import { about } from "@/data/my_data";

export const Presentation = () => {
  return (
    <div className="flex flex-col gap-4 px-12">
      <h1 className="text-[44px] font-bold text-[#808080]">
        Hi 👋 <br />
        I’m <span className="text-black">{about.name}</span>
      </h1>
      <div className="flex flex-col gap-16">
        <h1 className="text-md text-[#808080]">{about.description}</h1>
        <button className="rounded-xl bg-gradient-to-r from-[#1A1A1A] to-[#131313] p-4 text-white drop-shadow-lg">
          Get in touch
        </button>
      </div>
    </div>
  );
};
