import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


let store = configureStore({
    reducer: {
        user: userSlice,
    }
});

store.subscribe(() => console.log(store.getState()));


export default store;
