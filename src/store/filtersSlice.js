import { createSlice } from "@reduxjs/toolkit"

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: null,
        urgent: true,
        strategic: true,
        pressing: true,
        optional: true
    },
    reducers: {
        updateUrgent: (state) => { state.urgent = !state.urgent},
        updateStrategic: (state) => { state.strategic = !state.strategic},
        updatePressing: (state) => { state.pressing = !state.pressing},
        updateOptional: (state) => { state.optional = !state.optional },
        updateSearch: (state, action) => { state.search = action.payload }
    }
})

export const { updateUrgent, updateStrategic, updatePressing, updateOptional, updateSearch } = filtersSlice.actions;

export default filtersSlice.reducer;