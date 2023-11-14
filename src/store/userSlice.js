import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: {
            img: 'alex.jpg',
            name: 'Alex'
        },
        user: {
            name: "",
            email: "",
            password: "",
            dob: "",
            mqa: {
                question: "",
                answer: ""
            }
        }
    },
    reducers: {
        editProfile: (state, action) => {
            state.profile = action.payload;
        }
    }
})

export const { editProfile } = userSlice.actions;

export default userSlice.reducer;