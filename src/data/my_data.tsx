import { icons, images } from "@/assets";
import { StaticImageData } from "next/image";
import { text } from "stream/consumers";

export type Project = {
  name: string;
  description: string;
  technologies: Array<string>;
  image: StaticImageData;
  sourceCode?: string;
};

export type Tool = {
  icon: JSX.Element;
  name: string;
  type: string;
  website: string;
};

export const about = {
  name: ["Aina Tiavina", "A Mobile Developer", "A Frontend Developer"],
  description:
    "I am a Frontend and Mobile Developer who loves building easy-to-use and attractive apps. I specialize in creating modern websites and mobile applications that work well and look great. My goal is to turn ideas into user-friendly and high-performing digital products.",
};

export const projects: Project[] = [
  {
    name: "Quizko",
    description:
      "Quizko is a fun and interactive mobile app designed to make learning enjoyable. With a variety of quizzes on different topics, Quizko helps users test their knowledge and improve their skills in a playful way",
    technologies: [
      "Flutter",
      "NestJS",
      "PostgreSQL",
      "Codemagic",
      "Github Actions",
    ],
    image: images.quizko,
    sourceCode: "https://github.com/Poseidon1402/quizko",
  },
  {
    name: "My portfolio",
    description:
      "My portfolio is a curated showcase of my work and skills, designed to highlight my professional achievements, projects, and expertise. It provides a comprehensive overview of my capabilities, including detailed descriptions of completed projects, the technologies and methodologies I use and examples of my work",
    technologies: ["NextJS", "TailwindCSS", "Typescript"],
    image: images.portfolio,
    sourceCode: "https://github.com/Poseidon1402/portfolio",
  },
  {
    name: "Farwest Restaurant",
    description:
      "The Farwest restaurant website is a creative and functional project developed during the WebCup 2024 competition. This website showcases the unique Western-themed dining experience offered by Farwest restaurant.",
    technologies: ["ReactJS", "Typescript", "NestJS", "PostgreSQL"],
    image: images.farwest,
    sourceCode: "https://gitlab.com/safidy1863/webcup-2024",
  },
  {
    name: "Koudmin",
    description:
      "Koudmin is a mobile platform providing home maintenance and repair services. It connects users with skilled professionals for tasks such as plumbing, electrical work, and appliance repairs, all conveniently performed at the customer's location.",
    technologies: ["Flutter", "Laravel", "MySQL"],
    image: images.koudmin,
  },
  {
    name: "Leave Manager",
    description:
      "Leave Manager is a mobile application designed to streamline and manage the leave process within an enterprise. This tool allows HR departments and managers to efficiently track employee leave requests, approvals and balances",
    technologies: ["Flutter", "Firebase"],
    image: images.leaveManager,
    sourceCode: "https://github.com/Poseidon1402/leave_manager",
  },
  {
    name: "Ampio",
    description:
      "Ampio is a collaborative platform designed specifically for students, offering a space where they can share knowledge, seek help and engage with their peers. The platform aims to promote a supportive learning community by providing various features that facilitate academic and intellectual exchange",
    technologies: ["Flutter", "Go", "Firebase", "PostgreSQL"],
    image: images.ampio,
    sourceCode: "https://github.com/Codeo23/DevHunt2023",
  },
  {
    name: "E-Room",
    description:
      "E-Room is a booking platform designed for reserving meeting rooms. It streamlines the process by allowing users to book rooms online and automatically generates QR codes on tickets. These QR codes can be scanned for quick and easy access to the reserved rooms, enhancing security and efficiency in managing meeting spaces.",
    technologies: ["Flutter", "Firebase", "SQLite"],
    image: images.eRoom,
    sourceCode: "https://github.com/Poseidon1402/room_master",
  },
  {
    name: "Digi'Kool",
    description:
      "Digi'kool is a mobile application designed to provide a fun and interactive learning experience for kids. It was developed by our team during the ZahGeek 2023 hackathon.",
    technologies: ["React Native", "Laravel", "MySQL"],
    image: images.zahGeek,
    sourceCode: "https://github.com/Codeo23/ZahoGeek",
  },
];

export const tools: Tool[] = [
  {
    icon: <icons.flutter />,
    name: "Flutter",
    type: "Mobile Framework",
    website: "https://flutter.dev/",
  },
  {
    icon: <icons.dart />,
    name: "Dart",
    type: "Programming Language",
    website: "https://dart.dev/",
  },
  {
    icon: <icons.nextjs />,
    name: "Next.js",
    type: "Web Framework",
    website: "https://nextjs.org/",
  },
  {
    icon: <icons.react />,
    name: "React",
    type: "Web Framework",
    website: "https://react.dev/",
  },
  {
    icon: <icons.nestjs />,
    name: "NestJS",
    type: "Backend Framework",
    website: "https://nestjs.com/",
  },
  {
    icon: <icons.nodejs />,
    name: "Node.js",
    type: "Runtime Environment",
    website: "https://nodejs.org/en",
  },
  {
    icon: <icons.typescript />,
    name: "TypeScript",
    type: "Programming Language",
    website: "https://www.typescriptlang.org/",
  },
  {
    icon: <icons.tailwind />,
    name: "Tailwind CSS",
    type: "CSS Framework",
    website: "https://tailwindcss.com/",
  },
  {
    icon: <icons.postgresql />,
    name: "PostgreSQL",
    type: "Database",
    website: "https://www.postgresql.org/",
  },
  {
    icon: <icons.firebase />,
    name: "Firebase",
    type: "Backend as a Service",
    website: "https://firebase.google.com/",
  },
  {
    icon: <icons.git />,
    name: "Git",
    type: "Version Control",
    website: "https://git-scm.com/",
  },
  {
    icon: <icons.github />,
    name: "GitHub",
    type: "Version Control Hosting",
    website: "https://github.com/",
  },
  {
    icon: <icons.gitlab />,
    name: "GitLab",
    type: "Version Control Hosting",
    website: "https://about.gitlab.com/",
  },
  {
    icon: <icons.docker />,
    name: "Docker",
    type: "Containerization",
    website: "https://www.docker.com/",
  },
  {
    icon: <icons.androidStudio />,
    name: "Android Studio",
    type: "IDE",
    website: "https://developer.android.com/studio?hl=fr",
  },
  {
    icon: <icons.vscode />,
    name: "Visual Studio Code",
    type: "IDE",
    website: "https://code.visualstudio.com/",
  },
  {
    icon: <icons.figma />,
    name: "Figma",
    type: "Design Tool",
    website: "https://www.figma.com/",
  },
  {
    icon: <icons.insomnia />,
    name: "Insomnia",
    type: "API Client",
    website: "https://insomnia.rest/",
  },
];
