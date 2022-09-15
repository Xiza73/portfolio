import { setLanguage, setTheme } from "@/app/states";
import { Store } from "@/app/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OptionsConstants, Theme } from "../../utils/models/Options";
import "flag-icons/css/flag-icons.min.css";

export interface ChangeButtonInterface {}

const ChangeButton: React.FC<ChangeButtonInterface> = () => {
  const dispatch = useDispatch();
  const {
    language: { name: languageName, icon: languageIcon },
    theme: { name: themeName, icon: themeIcon },
  } = useSelector((store: Store) => store.options);
  const [changeClass, setChangeClass] = useState<string>("change");

  useEffect(() => {
    const theme =
      localStorage.theme &&
      (localStorage.theme === OptionsConstants.DARK ||
        localStorage.theme === OptionsConstants.LIGHT)
        ? localStorage.theme
        : themeName;

    themeHandler({
      name: theme,
      icon:
        theme === OptionsConstants.DARK
          ? OptionsConstants.MOON
          : OptionsConstants.SUN,
    });
  }, []);

  const themeHandler = (payload: Theme) => {
    dispatch(setTheme(payload));
    setTimeout(() => {
      setChangeClass("");
    }, 200);
    setChangeClass("change");
  };

  const changeTheme = () => {
    const isDark = themeName === OptionsConstants.DARK;
    themeHandler({
      name: isDark ? OptionsConstants.LIGHT : OptionsConstants.DARK,
      icon: isDark ? OptionsConstants.SUN : OptionsConstants.MOON,
    });
  };

  const changeLanguage = () => {
    const isUs = languageName === OptionsConstants.EN;

    dispatch(
      setLanguage({
        name: isUs ? OptionsConstants.ES : OptionsConstants.EN,
        icon: isUs ? OptionsConstants.PE_FLAG : OptionsConstants.US_FLAG,
      })
    );
  };

  return (
    <div className="w-16 h-24 fixed bottom-[47%] -right-11 hover:right-0 shadow-lg shadow-shadow-300 dark:shadow-dark-shadow-300 z-50 flex flex-col justify-center items-center bg-shadow-200 dark:bg-dark-shadow-200 rounded-l-lg pl-1">
      <button className="h-8 w-8 dark-mode-button mb-3" onClick={changeTheme}>
        <img src={themeIcon} className={changeClass} alt="" />
      </button>
      <button className="h-auto w-14" onClick={changeLanguage}>
        <span className={`w-7 leading-6 rounded-sm ${languageIcon}`}></span>
      </button>
    </div>
  );
};

export default ChangeButton;
