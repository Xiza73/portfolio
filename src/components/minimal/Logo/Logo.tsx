import { Store } from "@/app/store";
import { images } from "@/utils/constants";
import { OptionsConstants } from "@/utils/models/Options";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export interface LogoInterface {}

const Logo: React.FC<LogoInterface> = () => {
  const {
    theme: { name },
  } = useSelector((store: Store) => store.options);

  const img = name === OptionsConstants.DARK ? images.logoDark : images.logo;

  return (
    <Link href={"/"}>
      <a>
        <Image
          id="logo"
          src={img}
          width={100}
          height={100}
          alt="logo"
          className="cursor-pointer"
        />
      </a>
    </Link>
  );
};

export default Logo;
