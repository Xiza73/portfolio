import { Store } from "@/app/store";
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

  const handleChecked = () => setChecked(!checked);
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  const links = Object.values(navbarLinks).map((link) => (
    <div
      key={link}
      className="font-normal hover:text-lg bg-base-200 dark:bg-dark-base-200 md:bg-[transparent] md:dark:bg-[transparent] text-center py-1 capitalize first:rounded-t-md last:rounded-b-md md:h-min md:flex md:my-auto dark:text-light-100 cursor-pointer"
      onClick={() => {
        scrollToId(link);
        handleChecked();
      }}
    >
      {link}
    </div>
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
