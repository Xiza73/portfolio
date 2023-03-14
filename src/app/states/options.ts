import { content } from "@/utils/data/content";
import { createSlice } from "@reduxjs/toolkit";
import { Options, OptionsConstants } from "../../utils/models/Options";
import { getStorage, setStorage } from "../../utils/functions/index";

const initialState: Options = {
  language: {
    name: OptionsConstants.EN,
    icon: OptionsConstants.US_FLAG,
  },
  theme: {
    name: OptionsConstants.LIGHT,
    icon: OptionsConstants.SUN,
  },
  content: content[OptionsConstants.EN],
};

export const optionsSlice = createSlice<
  Options,
  {
    setLanguage: (
      state: Options,
      action: { payload: Options["language"] }
    ) => void;
    setTheme: (state: Options, action: { payload: Options["theme"] }) => void;
    getStorageConfig: (state: Options) => void;
  },
  OptionsConstants.OPTIONS
>({
  name: OptionsConstants.OPTIONS,
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
      state.content = content[action.payload.name];

      setStorage("language", action.payload.name);
    },
    setTheme(state, action) {
      state.theme = action.payload;
      if (action.payload.name === OptionsConstants.DARK) {
        document.documentElement.classList.add(OptionsConstants.DARK);
      } else {
        document.documentElement.classList.remove(OptionsConstants.DARK);
      }
      setStorage("theme", action.payload.name);
    },
    getStorageConfig(state) {
      const language = getStorage<OptionsConstants.EN | OptionsConstants.ES>(
        "language"
      );
      const theme = getStorage<OptionsConstants.LIGHT | OptionsConstants.DARK>(
        "theme"
      );
      if (language) {
        state.language = {
          name: language,
          icon:
            language === OptionsConstants.EN
              ? OptionsConstants.US_FLAG
              : OptionsConstants.PE_FLAG,
        };
        state.content = content[language];
      }
      if (theme) {
        state.theme = {
          name: theme,
          icon:
            theme === OptionsConstants.LIGHT
              ? OptionsConstants.SUN
              : OptionsConstants.MOON,
        };
        if (theme === OptionsConstants.DARK) {
          document.documentElement.classList.add(OptionsConstants.DARK);
        }
      }
    },
  },
});

export const { setLanguage, setTheme, getStorageConfig } = optionsSlice.actions;

export default optionsSlice.reducer;
