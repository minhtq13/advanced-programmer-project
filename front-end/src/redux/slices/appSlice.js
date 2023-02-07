import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseChair: [],
  detailFilm: [],
  isLogin: false,
  fieldFilm: [],
  timeItemInMovieChair: "",
  step: 0,
  changeCinema: null,
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
    setFieldFilm: (state, action) => {
      state.fieldFilm = action.payload;
    },
    setTimeItemInMovieChair: (state, action) => {
      state.timeItemInMovieChair = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setChangeCinema: (state, action) => {
      state.changeCinema = action.payload;
    },
  },
});

export const {
  setChooseChair,
  setDetailFilm,
  setIsLogin,
  setFieldFilm,
  setTimeItemInMovieChair,
  setStep,
  setChangeCinema,
} = appReducer.actions;
export default appReducer.reducer;
