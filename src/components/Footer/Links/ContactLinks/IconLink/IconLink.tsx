import React from "react";
import { IconType } from "react-icons/lib";

export interface IconLinkInterface {
  link: string;
  Icon: IconType;
}

const IconLink: React.FC<IconLinkInterface> = ({ link, Icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="text-2xl dark:fill-light-300 cursor-pointer" />
    </a>
  );
};

export default IconLink;
