import { createSlice } from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { list: [] },
    reducers: {
        addTask: (state, action) => {state.list.push(action.payload)},
        //updateTask: (state, action) => {...state.tasks,state.tasks},
        //deleteTask: (state, action) => {state.tasks.push(action.payload)},
    }
})

export const {addTask} = tasksSlice.actions;

export default tasksSlice.reducer;