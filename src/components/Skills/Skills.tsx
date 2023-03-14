import { Store } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";
import { LogoSubtitle } from "./LogoSubtitle";
import { MainSkills } from "./MainSkills";
import SecondSkills from "./SecondSkills/SecondSkills";

export interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
  const {
    skills: { title, more },
    navbar: {
      links: { skills },
    },
  } = useSelector((store: Store) => store.options.content);

  return (
    <div className="w-full relative pt-9 pb-14 bg-gradient-to-b from-base-100 dark:from-dark-base-100 via-base-100 dark:via-dark-base-100 to-base-300 dark:to-dark-base-300">
      <div className="absolute -top-20" id={skills}></div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="title" data-aos="zoom-in">
          {title}
        </h1>
        <div className="grid md:grid-cols-[3fr,2fr] md:grid-rows-1 w-full px-6 max-w-[1344px] md:gap-5">
          <div className="flex flex-col justify-start items-center mx-auto mb-8 md:mb-0">
            <div className="flex mx-auto items-center mb-7" data-aos="zoom-in">
              <LogoSubtitle />
            </div>
            <MainSkills />
          </div>
          <div className="flex flex-col justify-start items-center mx-auto">
            <h1 className="subtitle text-center mt-2" data-aos="zoom-in">
              {more}
            </h1>
            <SecondSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
