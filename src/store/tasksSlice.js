import { createSlice } from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { list: [] },
    reducers: {
        addTask: (state, action) => { state.list.push(action.payload) },
        updateTask: (state, action) => { 
            const { index, updatedTask } = action.payload;
            state.list[index] = {...state.list[index], ...updatedTask}
    },
    }
})

export const {addTask,updateTask} = tasksSlice.actions;

export default tasksSlice.reducer;