import { createSlice } from "@reduxjs/toolkit"

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        urgent: true,
        strategic: true,
        pressing: true,
        optional: true
    },
    reducers: {
        updateUrgent: (state) => { state.urgent = !state.urgent},
        updateStrategic: (state) => { state.strategic = !state.strategic},
        updatePressing: (state) => { state.pressing = !state.pressing},
        updateOptional: (state) => { state.optional = !state.optional},
    }
})

export const { updateUrgent, updateStrategic, updatePressing, updateOptional } = filtersSlice.actions;

export default filtersSlice.reducer;