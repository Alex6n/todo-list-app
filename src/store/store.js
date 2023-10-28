import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";
import { createNewTaskSlice } from "./createSlice";
import { filtersSlice } from "./filtersSlice";


let store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
        state: createNewTaskSlice.reducer,
        filters: filtersSlice.reducer,
    }
});

store.subscribe(() => console.log(store.getState()));


export default store;
