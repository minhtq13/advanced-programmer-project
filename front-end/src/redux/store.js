import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import appReducer from "./slices/appSlice";
import refreshReducer from "./slices/refreshSlice";

const rootReducer = combineReducers({
  appReducer,
  refreshReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export default store;
