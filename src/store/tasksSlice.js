import { createSlice } from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { list: [] },
    reducers: {
        addTask: (state, action) => { state.list.push(action.payload) },
        updateTask: (state, action) => { 
            console.log(state.list.find(item => item === action.payload.task))
            //state.list[index] = action.payload.change;
    },
    }
})

export const {addTask,updateTask} = tasksSlice.actions;

export default tasksSlice.reducer;