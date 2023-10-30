import { createSlice } from "@reduxjs/toolkit"

export const editSlice = createSlice({
    name: 'edit',
    initialState: [],
    reducers: {
        initiateEdit: (state, action) => { state.push(action.payload) },
        instantUpdateTask: (state, action) => { 
            const { index, updatedTask } = action.payload;
            state[index] = {...state[index], ...updatedTask}
        },
        instantPriority: (state, action) => { 
            state[action.payload].Priority = state[action.payload].Priority == 'Urgent' ? 'Strategic' : 
            state[action.payload].Priority == 'Strategic' ? 'Pressing' : 
            state[action.payload].Priority == 'Pressing' ? 'Optional' : 'Urgent'
        },
        instantApplied: (state, action) => { state.applied = action.payload },
    }
})

export const { initiateEdit, instantPriority, instantApplied, instantUpdateTask } = editSlice.actions;

export default editSlice.reducer;