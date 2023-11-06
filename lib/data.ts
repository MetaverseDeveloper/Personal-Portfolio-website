import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Undergraduate Student",
    location: "University of Haripur, Pakistan",
    description:
      "I am a 7th semester Software Engineering student at the University of Haripur. I have learned various skills and technologies related to software development, and participated in several academic and extracurricular activities, such as hackathons, workshops, and clubs.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Website Developer | Self-Employed",
    location: "Remote",
    description:
      "I work as a self-employed Full-Stack developer on various freelance platforms and outsourcing companies. I have completed several projects using React, Next.js, TailwindCSS, and other technologies. I have also learned full-stack development skills using Node.js, MongoDB, and GraphQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },

  {
    title: "Gen AI Developer | Team Lead",
    location: "Islamabad, Pakistan",
    description:
      "I am a Gen AI developer and team lead at Panaverse, a company that helps e-commerce businesses grow and innovate with Shopify themes and websites. I use cutting-edge technologies such as React.js, Next.js, TypeScript, Tailwind CSS, and GraphQL to create engaging and responsive web solutions for the clients. I am also exploring the power of generative AI with Python and Langchain, and how to apply it to websites to create unique and personalized content.",
    icon: React.createElement(FaReact),
    date: "Jan 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
