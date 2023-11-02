import { createSlice } from "@reduxjs/toolkit"

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        shown: 'notifications',
        settings: {
            browser: true,
            email: true,
            telegeram: true,
        },
        items: [
            {
                title: 'Unread Notification',
                description: 'you have not read this before..',
                read: false
            },
            {
                title: 'Read Notification',
                description: 'you have read this before..',
                read: true
            },
        ]
    },
    reducers: {
        updateShown: (state, action) => { state.shown = action.payload },
        updateSettings: (state, action) => { state.settings[action.payload] = !state.settings[action.payload] },
        addNotifications: (state, action) => { state.items.push(action.payload) },
        markNotifications: (state, action) => { state.items[action.payload] = { ...state.items[action.payload], read: !state.items[action.payload].read } },
        removeNotifications: (state, action) => { state.items.splice(action.payload, 1) }
    }
})

export const { updateShown, updateSettings, addNotifications, markNotifications, removeNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;