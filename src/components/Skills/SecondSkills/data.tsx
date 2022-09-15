import { FaAws } from "react-icons/fa";
import { SiJava, SiSpring, SiPostgresql, SiDocker } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SkillInterface } from "./Skill/Skill";

export const skills: SkillInterface[] = [
  {
    name: "Java",
    Icon: SiJava,
  },
  {
    name: "Spring",
    Icon: SiSpring,
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    name: "MySQL",
    Icon: GrMysql,
  },
  {
    name: "Docker",
    Icon: SiDocker,
  },
  {
    name: "AWS",
    Icon: FaAws,
  },
];
