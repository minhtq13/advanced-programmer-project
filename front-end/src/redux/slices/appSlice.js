import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseChair: [],
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setChooseChair: (state, action) => {
      state.chooseChair = [...action.payload];
    },
  },
});

export const { setChooseChair } = appReducer.actions;
export default appReducer.reducer;
