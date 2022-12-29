import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chooseChair: [],
    detailFilm: [],
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
    },
});

export const { setChooseChair, setDetailFilm } = appReducer.actions;
export default appReducer.reducer;
