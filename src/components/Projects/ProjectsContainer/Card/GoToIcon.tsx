import React from "react";
import { IconType } from "react-icons";

export interface GoToIconInterface {
  href: string;
  Icon: IconType;
  text: string;
}

const GoToIcon: React.FC<GoToIconInterface> = ({ href, Icon, text }) => {
  return (
    <a
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      className="flex flex-col justify-center items-center text-2xl"
    >
      <Icon className="text-dark-100 dark:text-light-100" />
      <p className="text-xs font-medium dark:text-light-100">{text}</p>
    </a>
  );
};

export default GoToIcon;
