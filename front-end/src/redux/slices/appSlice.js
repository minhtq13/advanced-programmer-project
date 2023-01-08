import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseChair: [],
  detailFilm: [],
  isLogin: false,
  listDetailFilm: [],
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
    setListDetailFilm: (state, action) => {
      if (state.listDetailFilm.includes(action.payload)) {
      } else {
        state.listDetailFilm.push(action.payload);
      }
    },
  },
});

export const { setChooseChair, setDetailFilm, setIsLogin, setListDetailFilm } =
  appReducer.actions;
export default appReducer.reducer;
