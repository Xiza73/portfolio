import { FaReact, FaNodeJs, FaAngular, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { RiVuejsLine } from "react-icons/ri";
import { PercentageCircleInterface } from "./PercentageCircle/PercentageCircle";

export const skills: PercentageCircleInterface[] = [
  {
    name: "React",
    percentage: 80,
    Icon: FaReact,
  },
  {
    name: "Next.js",
    percentage: 70,
    Icon: SiNextdotjs,
  },
  {
    name: "Angular",
    percentage: 60,
    Icon: FaAngular,
  },
  {
    name: "Vue",
    percentage: 60,
    Icon: RiVuejsLine,
  },
  {
    name: "Nuxt",
    percentage: 60,
    Icon: SiNuxtdotjs,
  },
  {
    name: "Node.js",
    percentage: 80,
    Icon: FaNodeJs,
  },
  {
    name: "Nest.js",
    percentage: 70,
    Icon: SiNestjs,
  },
  {
    name: "Express.js",
    percentage: 80,
    Icon: SiExpress,
  },
  {
    name: "MongoDB",
    percentage: 70,
    Icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    percentage: 70,
    Icon: SiPostgresql,
  },
  {
    name: "JavaScript",
    percentage: 90,
    Icon: SiJavascript,
  },
  {
    name: "TypeScript",
    percentage: 90,
    Icon: SiTypescript,
  },
  {
    name: "HTML",
    percentage: 100,
    Icon: FaHtml5,
  },
  {
    name: "CSS",
    percentage: 100,
    Icon: FaCss3,
  },
];
