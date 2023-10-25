import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";


let store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    }
});

//store.subscribe(() => console.log(store.getState()));


export default store;
