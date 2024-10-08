import { createSlice } from "@reduxjs/toolkit";

const ThemeKey = "THEMEKEY";
//check the device theme
const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//if theres no theme stored in local storage then will use the user device system theme
if (localStorage.getItem(ThemeKey) === null) {
  localStorage.setItem(ThemeKey, isSystemDark);
}
const initialTheme = localStorage.getItem(ThemeKey) === "true";

export const themeSlice = createSlice({
  initialState: initialTheme,
  name: "themeSlice",
  reducers: {
    changeTheme: (state, action) => {
      localStorage.setItem(ThemeKey, action.payload);
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
