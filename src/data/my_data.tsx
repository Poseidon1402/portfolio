import { icons, images } from "@/assets";
import { StaticImageData } from "next/image";
import { MdFlutterDash } from "react-icons/md";

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
    technologies: ["Flutter", "Laravel", "MySQL"],
    image: images.quizko,
  },
  {
    name: "Leave Manager",
    description:
      "Leave Manager is a mobile application designed to streamline and manage the leave process within an enterprise. This tool allows HR departments and managers to efficiently track employee leave requests, approvals and balances",
    technologies: [],
    image: images.leaveManager,
  },
  {
    name: "Ampio",
    description:
      "Ampio is a collaborative platform designed specifically for students, offering a space where they can share knowledge, seek help and engage with their peers. The platform aims to promote a supportive learning community by providing various features that facilitate academic and intellectual exchange",
    technologies: ["Flutter", "Go", "Firebase", "PostgreSQL"],
    image: images.ampio,
  },
  {
    name: "Koudmin",
    description:
      "Koudmin is a mobile platform providing home maintenance and repair services. It connects users with skilled professionals for tasks such as plumbing, electrical work, and appliance repairs, all conveniently performed at the customer's location.",
    technologies: [],
    image: images.koudmin,
  },
  {
    name: "E-Room",
    description:
      "E-Room is a booking platform designed for reserving meeting rooms. It streamlines the process by allowing users to book rooms online and automatically generates QR codes on tickets. These QR codes can be scanned for quick and easy access to the reserved rooms, enhancing security and efficiency in managing meeting spaces.",
    technologies: [],
    image: images.eRoom,
  },
  {
    name: "My portfolio",
    description:
      "My portfolio is a curated showcase of my work and skills, designed to highlight my professional achievements, projects, and expertise. It provides a comprehensive overview of my capabilities, including detailed descriptions of completed projects, the technologies and methodologies I use and examples of my work",
    technologies: [],
    image: images.portfolio,
  },
  {
    name: "Farwest Restaurant",
    description:
      "The Farwest restaurant website is a creative and functional project developed during the WebCup 2024 competition. This website showcases the unique Western-themed dining experience offered by Farwest restaurant.",
    technologies: [],
    image: images.farwest,
  },
  {
    name: "Digi'Kool",
    description:
      "Digi'kool is a mobile application designed to provide a fun and interactive learning experience for kids. The app offers a variety of educational content tailored to young learners, making it an engaging tool for children to explore and enhance their knowledge.",
    technologies: [],
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
