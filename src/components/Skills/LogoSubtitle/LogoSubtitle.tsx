import React from "react";
import Image from "next/image";
import { images } from "@/utils/constants";
import { Store } from "@/app/store";
import { useSelector } from "react-redux";

export interface LogoSubtitleInterface {}

const LogoSubtitle: React.FC<LogoSubtitleInterface> = () => {
  const {
    main: { first, second },
  } = useSelector((store: Store) => store.options.content.skills);
  return (
    <>
      <h1 className="subtitle mr-2 mb-0">{first}</h1>
      <Image
        src={images.tsJsLogo}
        alt="Typescript/Javascript Logo"
        width={50}
        height={50}
      />
      <h1 className="subtitle ml-2 mb-0">{second}</h1>
    </>
  );
};

export default LogoSubtitle;
