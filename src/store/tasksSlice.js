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
        deleteTask: (state, action) => { state.list.splice(action.payload) },
    }
})

export const {addTask,updateTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;