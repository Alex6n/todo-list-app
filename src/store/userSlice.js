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
        },        
        editUser: (state, action) => {
            const payload = action.payload;
            state.user = {
                ...state.user,
                ...payload,
                mqa: {
                    ...state.user.mqa,
                    ...payload.mqa
                }
            };
        }
    }
})


export const { editProfile, editUser } = userSlice.actions;

export default userSlice.reducer;