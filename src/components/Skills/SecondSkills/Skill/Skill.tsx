import React from "react";
import { IconType } from "react-icons/lib";

export interface SkillInterface {
  name: string;
  Icon: IconType;
}

const Skill: React.FC<SkillInterface> = ({ name, Icon }) => {
  return (
    <div
      className="flex flex-col items-center justify-start mx-6 mt-2 mb-4 max-w-[64px]"
      data-aos="zoom-in"
    >
      <div className="flex justify-center items-center mb-1">
        <Icon className="text-5xl dark:fill-light-300" />
      </div>
      <h1 className="text-lg font-semibold capitalize dark:text-light-100 text-center">
        {name}
      </h1>
    </div>
  );
};

export default Skill;
