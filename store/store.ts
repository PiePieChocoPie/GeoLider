import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./langSlice";

const savedLangRaw = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const savedLang: "ru" | "en" = savedLangRaw === "en" ? "en" : "ru";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
  preloadedState: {
    language: { current: savedLang }
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
