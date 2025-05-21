import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  current: 'ru' | 'en';
}

const initialState: LanguageState = {
  current: "ru"
};

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'ru' | 'en'>) => {
      state.current = action.payload;
      localStorage.setItem("lang", action.payload);
    }
  }
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;
