import React from "react";

export interface CardInterface {
  name: string;
  link: string;
  description: string;
  img: string;
}

const Card: React.FC<CardInterface> = ({ name, link, description, img }) => {
  return (
    <a
      target="_blank"
      href={link}
      rel="noopener noreferrer"
      className="w-52 min-h-max m-5 md:mx-10 rounded-lg flex flex-col p-0 bg-primary-100 dark:bg-dark-primary-100 shadow-lg shadow-primary-300 dark:shadow-dark-primary-300 no-underline"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-36 rounded-t-lg object-contain bg-light-100 dark:bg-dark-100"
      />
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-xl font-bold text-center dark:text-light-100">
          {name}
        </h1>
        <p className="text-sm text-center dark:text-light-100">{description}</p>
      </div>
    </a>
  );
};

export default Card;
