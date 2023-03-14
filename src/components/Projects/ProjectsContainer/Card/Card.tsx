import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GoToIcon } from "./";

export interface CardInterface {
  name: string;
  description: string;
  img: string;
  repo?: string;
  visit?: string;
}

const Card: React.FC<CardInterface> = ({
  name,
  description,
  img,
  repo,
  visit,
}) => {
  return (
    <div
      className="grid grid-rows-[9rem_auto] w-64 min-h-max m-5 md:mx-10 rounded-lg p-0 bg-primary-100 dark:bg-dark-primary-100 shadow-lg shadow-primary-300 dark:shadow-dark-primary-300 no-underline"
      data-aos="zoom-in"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-36 rounded-t-lg object-contain bg-light-100 dark:bg-dark-base-100"
      />
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-xl font-bold text-center dark:text-light-100">
          {name}
        </h1>
        <p className="text-sm text-center dark:text-light-100 mb-4">
          {description}
        </p>
        <div className="flex justify-around items-center w-full mt-auto">
          {repo && <GoToIcon href={repo} Icon={FaGithub} text="Repo" />}
          {visit && <GoToIcon href={visit} Icon={TbWorld} text="Web" />}
        </div>
      </div>
    </div>
  );
};

export default Card;
