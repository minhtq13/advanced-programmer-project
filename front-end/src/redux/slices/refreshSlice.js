import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    refreshRemoveFilm: false,
    refreshAddFilm: false,
    refreshUpdateFilm: false,
};

const refreshReducer = createSlice({
    name: "refreshReducer",
    initialState,
    reducers: {
        setRefreshRemoveFilm: (state, action) => {
            state.refreshRemoveFilm = action.payload;
        },
        setRefreshAddFilm: (state, action) => {
            state.addFilm = action.payload;
        },
        setRefreshUpdateFilm: (state, action) => {
            state.refreshUpdateFilm = action.payload;
        },
    },
});

export const { setRefreshRemoveFilm, setRefreshAddFilm, setRefreshUpdateFilm } =
    refreshReducer.actions;
export default refreshReducer.reducer;
