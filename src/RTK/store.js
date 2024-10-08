import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/theme-slice";
import weatherReducer from "./slice/weather-slice";
import loadingReducer from "./slice/loading-slice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
    loading: loadingReducer,
  },
});
