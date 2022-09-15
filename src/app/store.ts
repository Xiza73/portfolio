import { Options } from "@/utils/models/Options";
import { configureStore } from "@reduxjs/toolkit";
import { optionsSlice } from "./states";

export interface Store {
  options: Options;
}

export default configureStore<Store>({
  reducer: {
    options: optionsSlice.reducer,
  },
});
