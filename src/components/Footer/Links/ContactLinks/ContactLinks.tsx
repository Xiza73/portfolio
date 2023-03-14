import React from "react";
import { data } from "./data";
import { IconLink } from "./IconLink";
import { BsWhatsapp } from "react-icons/bs";

export interface ContactLinksInterface {}

const ContactLinks: React.FC<ContactLinksInterface> = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:order-2">
      <div className="flex justify-around w-1/2">
        {data.map(({ link, Icon }, i) => (
          <IconLink key={`icon-${i}`} link={link} Icon={Icon} />
        ))}
      </div>
      <a
        href="https://wa.me/51938263506"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center text-center mt-4"
      >
        <BsWhatsapp className="text-2xl mr-1 dark:fill-light-300" />
        <p className="dark:text-light-300 underline">+51 938 263 506</p>
      </a>
    </div>
  );
};

export default ContactLinks;
