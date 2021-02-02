import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

// const rootReducer: any = combineReducers({
//     toolkit: toolkitSlice
// });

export const store: any = configureStore({
    reducer: toolkitSlice,
});
