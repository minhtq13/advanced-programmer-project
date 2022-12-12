import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateMovie: "28/11 - T2",
  chooseChair: [],
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDateMovie: (state, action) => {
      state.dateMovie = action.payload;
    },
    setChooseChair: (state, action) => {
      state.chooseChair = [...action.payload];
    },
  },
});

export const { setDateMovie, setChooseChair } = appReducer.actions;
export default appReducer.reducer;
