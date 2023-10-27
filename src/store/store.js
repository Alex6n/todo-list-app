import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";
import { createNewTaskSlice } from "./createSlice";


let store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
        state: createNewTaskSlice.reducer,
    }
});

//store.subscribe(() => console.log(store.getState()));


export default store;
