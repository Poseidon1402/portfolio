import { about } from "@/data/my_data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiCodersrank } from "react-icons/si";

export const Presentation = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4 laptop:flex-row-reverse laptop:gap-10">
        <Image
          src="/photo.jpg"
          alt="Aina"
          width={200}
          height={150}
          className="mt-5 aspect-square justify-center self-center rounded-full object-cover"
        />
        <div>
          <h1 className="text-[44px] font-bold text-[#808080]">
            Hi 👋 <br />
            I’m <span className="text-black">{about.name}</span>
          </h1>
          <div className="flex flex-col gap-16">
            <h1 className="text-md text-[#808080]">{about.description}</h1>
          </div>
          <ul className="my-4 flex gap-6">
            <li>
              <Link href="https://github.com/Poseidon1402" target="_blank">
                <BsGithub size={30} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/aina-tiavina/"
                target="_blank"
              >
                <BsLinkedin size={30} />
              </Link>
            </li>
            <li>
              <Link
                href="https://profile.codersrank.io/user/poseidon1402"
                target="_blank"
              >
                <SiCodersrank size={30} />
              </Link>
            </li>
          </ul>
          <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#1A1A1A] to-[#131313] p-3 text-sm text-white drop-shadow-lg laptop:w-36">
            <Link href="#contactMe">Get in touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
