import { createSlice } from "@reduxjs/toolkit"

export const editSlice = createSlice({
    name: 'edit',
    initialState: [],
    reducers: {
        initiateEdit: (state, action) => { state.push(action.payload) },
        instantUpdateTask: (state, action) => { 
            const { index, updatedTask } = action.payload;
            state.list[index] = {...state.list[index], ...updatedTask}
        },
        instantTitle: (state, action) => { state.Title = action.payload},
        instantDesc: (state, action) => { state.Describtion = action.payload},
        instantExpectedBy: (state, action) => { state.ExpectedBy = action.payload},
        instantPriority: (state) => { 
            state.Priority = state.Priority == 'Urgent' ? 'Strategic' : 
                state.Priority == 'Strategic' ? 'Pressing' : 
                    state.Priority == 'Pressing' ? 'Optional' : 'Urgent'
        },
        instantIcon: (state, action) => { state.Icon = action.payload },
        instantApplied: (state, action) => { state.applied = action.payload },
    }
})

export const { initiateEdit, instantTitle, instantDesc, instantExpectedBy, instantPriority, instantIcon, instantApplied, instantUpdateTask } = editSlice.actions;

export default editSlice.reducer;