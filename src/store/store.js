import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";
import { createNewTaskSlice } from "./createSlice";
import { filtersSlice } from "./filtersSlice";
import { editSlice } from "./editSlice";
import { notificationsSlice } from "./notificationsSlice";



let store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
        create: createNewTaskSlice.reducer,
        filters: filtersSlice.reducer,
        edit: editSlice.reducer,
        notifications: notificationsSlice.reducer,
    }
});

//store.subscribe(() => console.log(store.getState()));


export default store;