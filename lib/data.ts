import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spotiImg from "@/public/spotid.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import breaditImg from "@/public/breadit.png"

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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Breadit",
    description:
      "A reddit-like but better webapp that i built with various features like Pagination, Community creation and Post creation.",
    tags: [ "Next.js","React", "Postgres", "Tailwind", "Prisma","Supabase"],
    imageUrl: breaditImg,
  },
  {
    title: "SPOTIFYDOWNLOADER",
    description:
      "A website that went semiviral, where the users can enter a link to a Spotify track/album and download it.",
    tags: ["React", "Next.js", "Postgres", "Tailwind", "Prisma", "Kinde"],
    imageUrl: spotiImg,
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
  "Python",
  "Django",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Tenorflow",
  "MongoDB",
  "NLP",
  "PyTorch",
  "Rust",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;