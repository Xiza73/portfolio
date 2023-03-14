import React from "react";

export interface CardInterface {
  icon: React.ReactNode;
  text: string;
}

const Card: React.FC<CardInterface> = ({ icon, text }) => {
  return (
    <div
      className="w-60 min-h-[270px] bg-primary-200 dark:bg-dark-primary-200 shadow-primary-300 dark:shadow-dark-primary-300 shadow-md grid grid-rows-2 m-5 rounded-2xl"
      data-aos="zoom-in"
    >
      <div className="flex justify-center items-center">{icon}</div>
      <div className="text-center font-medium px-6 pt-1 pb-3 text-dark-100 dark:text-light-100">
        {text}
      </div>
    </div>
  );
};

export default Card;
