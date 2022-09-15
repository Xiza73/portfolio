import React from "react";
import { skills } from "./data";
import Skill from "./Skill/Skill";

export interface SecondSkillsInterface {}

const SecondSkills: React.FC<SecondSkillsInterface> = () => {
  return (
    <div className="flex flex-wrap justify-around w-full">
      {skills.map((skill, id) => (
        <Skill key={`secskill-${id}`} name={skill.name} Icon={skill.Icon} />
      ))}
    </div>
  );
};

export default SecondSkills;
