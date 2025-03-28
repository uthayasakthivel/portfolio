import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TodoGlassmorphism from "../../public/TodoGlassmorphism.png";
import ultimateCookBook from "/public/ultimateCookBook.png";
import travelAdvisor from "/public/travelAdvisor.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UI Developer [Trasol Technologies]",
    location: "Namakkal, Tamil Nadu",
    description:
      "Contributed to Dubai Expo projects by creating and optimizing websites using React (class components) and CSS.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Web Developer [Resource Square Solutions Pvt. Ltd.]",
    location: "Chennai, Tamil Nadu",
    description:
      "Developed web pages for ExxonMobil using React.js and Tailwind CSS, enhancing performance and user satisfaction. Integrated REST APIs, resolved client issues using Jira and Postman, and introduced features to boost engagement.",
    icon: React.createElement(FaReact),
    date: "Mar 2022 – May 2023",
  },

  {
    title: "Frontend Developer [Techjet]",
    location: "Bangalore, Karnataka",
    description:
      "Enhanced user-facing features with React.js and TypeScript, improving client retention. Conducted user testing, optimized APIs with Postman, and introduced new features using React Hooks to boost usability.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Jun 2024",
  },
  {
    title: "Frontend Developer - Associate [Limitscale]",
    location: "Bangalore, Karnataka",
    description:
      "Developed an ECommerce application using React.js, TypeScript, and Redux Toolkit, enhancing admin efficiency and reducing task time. Improved UI with Material UI and optimized routing to boost navigation speed.",
    icon: React.createElement(FaReact),
    date: "July 2024 - Oct 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Travel Advisor",
    description:
      "A static website with seven structured sections, offering a seamless and engaging experience.",
    tags: ["React", "CSS"],
    imageUrl: travelAdvisor,
  },
  {
    title: "Todo App with Glassmorphism Design",
    description:
      "A modern Todo app with a Glassmorphism UI, task persistence, animations, and light/dark mode support.",
    tags: ["React", "Tailwind CSS", "Context API", "Heroicons"],
    imageUrl: TodoGlassmorphism,
  },
  {
    title: "The Ultimate Cookbook",
    description:
      "A recipe app fetching data from a dummy API, with pagination, search, likes, and detailed views.",
    tags: ["React", "TailwindCSS", "Axios", "React Paginate", "Custom Hooks"],
    imageUrl: ultimateCookBook,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "RestAPI",
  "JWT",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
