import React from "react";
import Links from "./Links/Links";
import Logo from "../minimal/Logo/Logo";

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  return (
    <div className="w-full h-20 md:h-24 flex items-center fixed bg-base-100 dark:bg-dark-base-100 z-50">
      <nav className="relative flex items-center justify-start mx-auto flex-wrap w-full max-w-lg md:max-w-[1344px] h-12 md:h-16 px-5 md:px-14">
        <div className="w-12 md:w-16 h-full">
          <Logo />
        </div>
        <div className="w-12 md:w-auto h-full md:h-16 flex ml-auto">
          <Links />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
