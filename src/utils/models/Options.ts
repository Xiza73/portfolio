import { Content } from "../data/content";

/* eslint-disable no-unused-vars */
export enum OptionsConstants {
  OPTIONS = "options",
  EN = "en",
  ES = "es",
  PE_FLAG = "fi fi-es",
  US_FLAG = "fi fi-us",
  LIGHT = "light",
  DARK = "dark",
  SUN = "https://i.pinimg.com/originals/e3/10/85/e3108539d1b50919cda36f6d09e894ba.png",
  MOON = "https://i.pinimg.com/originals/21/08/af/2108af8f7024510edb14ee3671d1fff4.png",
}

export type LanguageName = OptionsConstants.EN | OptionsConstants.ES;

export type LanguageIcon = OptionsConstants.US_FLAG | OptionsConstants.PE_FLAG;

export type Language = {
  name: LanguageName;
  icon: LanguageIcon;
};

export type ThemeName = OptionsConstants.LIGHT | OptionsConstants.DARK;

export type ThemeIcon = OptionsConstants.SUN | OptionsConstants.MOON;

export type Theme = {
  name: ThemeName;
  icon: ThemeIcon;
};

export type Options = {
  language: Language;
  theme: Theme;
  content: Content;
};
