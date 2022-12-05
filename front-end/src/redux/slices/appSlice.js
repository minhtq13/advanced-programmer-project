import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateMovie: "28/11 - T2",
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDateMovie: (state, action) => {
      state.dateMovie = action.payload;
    },
  },
});

export const { setDateMovie } = appReducer.actions;
export default appReducer.reducer;
