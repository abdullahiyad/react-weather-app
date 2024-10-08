import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_PLACE } from "../../constants/index";

const weatherSlice = createSlice({
  initialState: DEFAULT_PLACE,
  name: "weatherSlice",
  reducers: {
    setPosition: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { getPosition, setPosition } = weatherSlice.actions;
export default weatherSlice.reducer;
