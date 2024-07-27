import { icons, images } from "@/assets";
import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  description: string;
  technologies: Array<string>;
  image: StaticImageData;
};

export type Tool = {
  icon: JSX.Element;
  name: string;
  type: string;
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
    image: images.quizko,
  },
  {
    name: "Leave Manager",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: ["Flutter", "Dart", "Laravel"],
    image: images.leaveManager,
  },
  {
    name: "Ampio",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: ["Flutter", "Dart", "Laravel"],
    image: images.ampio,
  },
  {
    name: "Koudmin",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: ["Flutter", "Dart", "Laravel"],
    image: images.koudmin,
  },
  {
    name: "E-Room",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: ["Flutter", "Dart", "Laravel"],
    image: images.eRoom,
  },
  {
    name: "My portfolio",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: ["Flutter", "Dart", "Laravel"],
    image: images.portfolio,
  },
  {
    name: "Farwest Restaurant",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: ["Flutter", "Dart", "Laravel"],
    image: images.farwest,
  },
  {
    name: "Digi'Kool",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: ["Flutter", "Dart", "Laravel"],
    image: images.zahGeek,
  },
];

export const tools: Tool[] = [
  {
    icon: <icons.flutter />,
    name: "Flutter",
    type: "Mobile Framework",
  },
  {
    icon: <icons.dart />,
    name: "Dart",
    type: "Programming Language",
  },
  {
    icon: <icons.nextjs />,
    name: "Next.js",
    type: "Web Framework",
  },
  {
    icon: <icons.react />,
    name: "React",
    type: "Web Framework",
  },
  {
    icon: <icons.nestjs />,
    name: "NestJS",
    type: "Backend Framework",
  },
  {
    icon: <icons.nodejs />,
    name: "Node.js",
    type: "Runtime Environment",
  },
  {
    icon: <icons.typescript />,
    name: "TypeScript",
    type: "Programming Language",
  },
  {
    icon: <icons.tailwind />,
    name: "Tailwind CSS",
    type: "CSS Framework",
  },
  {
    icon: <icons.postgresql />,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    icon: <icons.firebase />,
    name: "Firebase",
    type: "Backend as a Service (BaaS)",
  },
  {
    icon: <icons.git />,
    name: "Git",
    type: "Version Control",
  },
  {
    icon: <icons.github />,
    name: "GitHub",
    type: "Version Control Hosting",
  },
  {
    icon: <icons.gitlab />,
    name: "GitLab",
    type: "Version Control Hosting",
  },
  {
    icon: <icons.docker />,
    name: "Docker",
    type: "Containerization",
  },
  {
    icon: <icons.androidStudio />,
    name: "Android Studio",
    type: "IDE",
  },
  {
    icon: <icons.vscode />,
    name: "Visual Studio Code",
    type: "IDE",
  },
  {
    icon: <icons.figma />,
    name: "Figma",
    type: "Design Tool",
  },
  {
    icon: <icons.insomnia />,
    name: "Insomnia",
    type: "API Client",
  },
];
