import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseChair: [],
  detailFilm: [],
  isLogin: false,
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setChooseChair: (state, action) => {
      state.chooseChair = [...action.payload];
    },

    setDetailFilm: (state, action) => {
      state.detailFilm = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setChooseChair, setDetailFilm, setIsLogin } = appReducer.actions;
export default appReducer.reducer;
