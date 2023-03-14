import { Store } from "@/app/store";
import { OptionsConstants } from "@/utils/models/Options";
import React from "react";
import { useSelector } from "react-redux";
import { Dots } from "../minimal/Dots";

export interface HeroInterface {}

const Hero: React.FC<HeroInterface> = () => {
  const {
    language,
    hero: { greeting, title, subtitle, paragraph, visitCv },
  } = useSelector((store: Store) => store.options.content);

  const pdfPath =
    language === OptionsConstants.EN
      ? "https://docs.google.com/document/d/1pvY24gUtvOd_TJz0AK8xLZXmhnIfsXILx4pMOeJxMTM/edit?usp=sharing"
      : "https://docs.google.com/document/d/12-3lypw5FeWGi6G98IOMhYQLf0gSKyDNSUX1HOOA8wA/edit?usp=sharing";

  return (
    <div className="flex flex-col items-center pt-5 max-w-[1344px] md:flex-row md:justify-between md:px-20 md:mt-3 md:mx-auto">
      <div className="mb-5 md:order-2 md:mb-0 md:ml-14" data-aos="zoom-in">
        <Dots width={5} height={3} />
      </div>
      <div
        className="text-center min-w-[284px] max-w-[380px] px-5 md:order-1 md:text-start md:max-w-[500px]"
        data-aos="zoom-in"
      >
        <h2 className="text-lg leading-9 dark:text-light-100">
          <span className="text-3xl font-semibold dark:text-light-100 text-dark-100">
            {greeting}
          </span>
          {title}
        </h2>
        <h1 className="text-xl font-semibold leading-9 dark:text-light-100">
          {subtitle}
        </h1>
        {paragraph.map((p, i) => (
          <h4 className="text-base dark:text-light-100" key={i}>
            {p}
          </h4>
        ))}
        <div className="mb-7"></div>
        <a
          className="btn btn-primary"
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
        >
          {visitCv}
        </a>
      </div>
    </div>
  );
};

export default Hero;
