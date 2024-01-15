import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import { enableMapSet } from 'immer';
import configReducer from "./configSlice";
import gptReducer from "../utils/gptSlice";

enableMapSet();

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
    config:configReducer,
    gpt:gptReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default appStore;