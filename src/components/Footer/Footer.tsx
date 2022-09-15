import { Store } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";
import { Contact } from "./Contact";
import { Links } from "./Links";

export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  const { contact } = useSelector(
    (store: Store) => store.options.content.navbar.links
  );
  return (
    <div className="w-full relative pt-8 pb-9">
      <div id={contact} className="absolute -top-28"></div>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-[1344px]">
        <Contact />
        <Links />
      </div>
    </div>
  );
};

export default Footer;
