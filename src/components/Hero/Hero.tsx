import { Store } from "@/app/store";
import { OptionsConstants } from "@/utils/models/Options";
import React from "react";
import { useSelector } from "react-redux";
import { Dots } from "../minimal/Dots";

export interface HeroInterface {}

const Hero: React.FC<HeroInterface> = () => {
  const {
    language,
    hero: { greeting, title, subtitle, paragraph, download },
  } = useSelector((store: Store) => store.options.content);

  const pdfPath =
    language === OptionsConstants.EN ? "/english_cv.pdf" : "/spanish_cv.pdf";

  return (
    <div className="flex flex-col items-center pt-5 max-w-[1344px] md:flex-row md:justify-between md:px-20 md:mx-auto">
      <div className="mb-5 md:order-2 md:mb-0 md:ml-14">
        <Dots width={5} height={3} />
      </div>
      <div className="text-center min-w-[284px] max-w-[380px] px-5 md:order-1 md:text-start md:max-w-[500px]">
        <h2 className="text-lg leading-9 dark:text-light-100">
          <span className="text-3xl font-semibold dark:text-light-100 text-dark-100">
            {greeting}
          </span>
          {title}
        </h2>
        <h1 className="text-2xl font-semibold leading-9 dark:text-light-100">
          {subtitle}
        </h1>
        <h4 className="text-base dark:text-light-100 mb-7">{paragraph}</h4>
        <a
          className="btn btn-primary"
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          download={"CV_Manuel_Fajardo.pdf"}
        >
          {download}
        </a>
      </div>
    </div>
  );
};

export default Hero;
