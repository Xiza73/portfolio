import React from "react";
import { data } from "./data";
import { IconLink } from "./IconLink";
import { BsFillTelephoneFill } from "react-icons/bs";

export interface ContactLinksInterface {}

const ContactLinks: React.FC<ContactLinksInterface> = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:order-2">
      <div className="flex justify-around w-1/2">
        {data.map(({ link, Icon }, i) => (
          <IconLink key={`icon-${i}`} link={link} Icon={Icon} />
        ))}
      </div>
      <h1 className="flex justify-center items-center text-center mt-4">
        <BsFillTelephoneFill className="text-2xl mr-1 dark:fill-light-300" />
        <p className="dark:text-light-100">+51 938 263 506</p>
      </h1>
    </div>
  );
};

export default ContactLinks;
