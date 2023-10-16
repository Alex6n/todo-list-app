import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'Ahmed'
    },
    reducers: {
        changeUsername: (state,action) => {state.username = action.payload},
    }
})

export const {changeUsername} = userSlice.actions;

export default userSlice.reducer;