import { Store } from "@/app/store";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdContent } from "./MdContent";
import { SmContent } from "./SmContent";

export interface LinksInterface {}

const Links: React.FC<LinksInterface> = () => {
  const [checked, setChecked] = useState(false);
  const { links: navbarLinks } = useSelector(
    (store: Store) => store.options.content.navbar
  );

  const handleChecked = () => {
    setChecked(!checked);
  };

  const links = Object.values(navbarLinks).map((link) => (
    <Link key={link} href={`#${link}`} scroll={true}>
      <div
        className="font-normal hover:text-lg bg-base-200 dark:bg-dark-base-200 md:bg-[transparent] md:dark:bg-[transparent] text-center py-1 capitalize first:rounded-t-md last:rounded-b-md md:h-min md:flex md:my-auto dark:text-light-100 cursor-pointer"
        onClick={handleChecked}
      >
        {link}
      </div>
    </Link>
  ));
  return (
    <>
      <MdContent links={links} />
      <SmContent
        links={links}
        checked={checked}
        handleChecked={handleChecked}
      />
    </>
  );
};

export default Links;
