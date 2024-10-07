import { about } from "@/data/my_data";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiCodersrank } from "react-icons/si";
import Link from "next/link";
import { FlipWords, GetInTouchButton, TextGenerateEffect } from "@/components";

export const Presentation = () => {
  return (
    <div className="flex flex-col gap-4" id="about">
      <div className="flex flex-col items-center gap-6 laptop:flex-row-reverse laptop:gap-10">
        <Image
          src="/photo.jpg"
          alt="Aina"
          width={200}
          height={200}
          className="mt-5 aspect-square rounded-full border-4 border-white object-cover shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-onyx"
        />
        <div className="text-center laptop:text-left">
          <h1 className="text-[44px] font-bold text-gray-600">
            Hi 👋 <br />
            I’m{" "}
            <span className="text-black dark:text-white">
              <FlipWords words={about.name} />
            </span>
          </h1>
          <TextGenerateEffect
            words={about.description}
            className="text-md font-normal text-gray-500"
          />
          <ul className="my-4 flex justify-center gap-6 laptop:justify-start">
            <li>
              <Link href="https://github.com/Poseidon1402" target="_blank">
                <BsGithub
                  className="text-gray-600 transition-colors duration-300 hover:text-black dark:text-white"
                  size={30}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/aina-tiavina/"
                target="_blank"
                className="cursor-pointer"
              >
                <BsLinkedin
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 dark:text-white"
                  size={30}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://profile.codersrank.io/user/poseidon1402"
                target="_blank"
              >
                <SiCodersrank
                  className="text-green-600 transition-colors duration-300 hover:text-green-800"
                  size={30}
                />
              </Link>
            </li>
          </ul>
          <GetInTouchButton />
        </div>
      </div>
    </div>
  );
};
