import { createSlice } from "@reduxjs/toolkit"

export const createNewTaskSlice = createSlice({
    name: 'edit',
    initialState: {
        title: '',
        priority: 'Urgent',
        expectedBy: new Date().toISOString().slice(0, 10),
        applied: false
    },
    reducers: {
        updateTitle: (state, action) => { state.title = action.payload},
        updatePriority: (state, action) => { state.priority = action.payload},
        updateExpectedBy: (state, action) => { state.expectedBy = action.payload },
        updateApplied: (state, action) => { state.applied = action.payload },
        resetTitle: (state) => { state.title = ''},
    }
})

export const { updateTitle, updatePriority, updateExpectedBy, updateApplied, resetTitle } = createNewTaskSlice.actions;

export default createNewTaskSlice.reducer;