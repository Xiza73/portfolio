import { Store } from "@/app/store";
import { images, links } from "@/utils/constants";
import { OptionsConstants } from "@/utils/models/Options";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export interface FooterLogoInterface {}

const FooterLogo: React.FC<FooterLogoInterface> = () => {
  const {
    theme: { name },
  } = useSelector((store: Store) => store.options);

  const logo = name === OptionsConstants.DARK ? images.logoDark : images.logo;
  const text = name === OptionsConstants.DARK ? images.textDark : images.text;

  return (
    <div className="flex flex-col justify-center items-center w-full mt-5 md:mt-0 md:mb-5">
      <a
        target="_blank"
        href={links.repo}
        rel="noopener noreferrer"
        className="flex flex-col justify-center items-center h-max"
      >
        <Image
          id="logo"
          src={logo}
          width={200}
          height={200}
          alt="logo"
          className="cursor-pointer"
        />
        <div className="mt-4"></div>
        <Image
          id="text"
          src={text}
          width={100}
          height={50}
          alt="text"
          className="cursor-pointer"
        />
      </a>
    </div>
  );
};

export default FooterLogo;
