import { icons } from "@/assets";

export type Project = {
  name: string;
  description: string;
  technologies: Array<string>;
};

export type Tool = {
  icon: JSX.Element;
  name: string;
  type: "Web Framework" | "Mobile Framework" | "IDE" | "Versioning";
};

export const about = {
  name: "Aina Tiavina",
  description:
    "I am a Frontend and Mobile Developer who loves building easy-to-use and attractive apps. I specialize in creating modern websites and mobile applications that work well and look great. My goal is to turn ideas into user-friendly and high-performing digital products.",
};

export const projects: Project[] = [
  {
    name: "Quizko",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: ["Flutter", "Dart", "Laravel"],
  },
];

export const tools: Tool[] = [
  {
    icon: <icons.Flutter />,
    name: "Flutter",
    type: "Mobile Framework",
  },
];
