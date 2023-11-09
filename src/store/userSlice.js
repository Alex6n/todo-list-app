import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: {
            img: 'alex.jpg',
            name: 'Alex'
        },
    },
    reducers: {
        editProfile: (state, action) => {
            state.profile = action.payload;
        }
    }
})

export const { editProfile } = userSlice.actions;

export default userSlice.reducer;