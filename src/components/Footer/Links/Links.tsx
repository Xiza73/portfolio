import React from "react";
import { ContactLinks } from "./ContactLinks";
import { FooterLogo } from "./FooterLogo";

export interface LinksInterface {}

const Links: React.FC<LinksInterface> = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-80 mx-auto"
      data-aos="zoom-in"
    >
      <ContactLinks />
      <FooterLogo />
    </div>
  );
};

export default Links;
