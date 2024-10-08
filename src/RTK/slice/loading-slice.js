import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  initialState: true,
  name: "loadingSlice",
  reducers: {
    changeLoadingState: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { changeLoadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
