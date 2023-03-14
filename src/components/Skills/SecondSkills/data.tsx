import { FaAws } from "react-icons/fa";
import {
  SiJava,
  SiSpring,
  SiDocker,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiJenkins,
} from "react-icons/si";
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
  {
    name: "C#",
    Icon: SiCsharp,
  },
  {
    name: "SQL Server",
    Icon: SiMicrosoftsqlserver,
  },
  {
    name: "Jenkins",
    Icon: SiJenkins,
  },
];
