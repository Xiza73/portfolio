import { Store } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";
import { CardsContainer } from "./CardsContainer";

export interface AboutMeInterface {}

const AboutMe: React.FC<AboutMeInterface> = () => {
  const { title } = useSelector((store: Store) => store.options.content.about);

  return (
    <div className="w-full bg-base-200 dark:bg-dark-base-200 pt-1 pb-10">
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="title" data-aos="zoom-in">
          {title}
        </h1>
        <CardsContainer />
      </div>
    </div>
  );
};

export default AboutMe;
