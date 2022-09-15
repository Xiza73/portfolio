import { content } from "@/utils/data/content";
import { createSlice } from "@reduxjs/toolkit";
import { Options, OptionsConstants } from "../../utils/models/Options";

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
  },
  OptionsConstants.OPTIONS
>({
  name: OptionsConstants.OPTIONS,
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
      state.content = content[action.payload.name];
    },
    setTheme(state, action) {
      state.theme = action.payload;
      if (action.payload.name === OptionsConstants.DARK) {
        document.documentElement.classList.add(OptionsConstants.DARK);
      } else {
        document.documentElement.classList.remove(OptionsConstants.DARK);
      }
      localStorage.setItem("theme", action.payload.name);
    },
  },
});

export const { setLanguage, setTheme } = optionsSlice.actions;

export default optionsSlice.reducer;
