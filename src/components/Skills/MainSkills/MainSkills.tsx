import React from "react";
import { PercentageCircle } from "./PercentageCircle";
import { skills } from "./data";

export interface MainSkillsInterface {}

const MainSkills: React.FC<MainSkillsInterface> = () => {
  return (
    <div className="flex flex-wrap justify-around w-full">
      {skills.map((skill, id) => (
        <PercentageCircle
          key={`skill-${id}`}
          name={skill.name}
          percentage={skill.percentage}
          Icon={skill.Icon}
        />
      ))}
    </div>
  );
};

export default MainSkills;
