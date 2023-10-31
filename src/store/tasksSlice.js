import { createSlice } from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        list: [
            {
                ID: 'loakiemvwob9tritfb',
                Title: 'Interview Preparation',
                Describtion: '- Prepare your CV!\n- Prepare your selling speech.\n- Prepare some Ice Cream (Just in case)',
                Priority: 'Urgent',
                ExpectedBy: '2023-10-31',
                Icon: 'sadIceCream.jpg',
                CreatedOn: '2023-10-28',
                Completed: false,
                Trash: false,
                State: 'show',
                User: 'Alex'
              },
    ] },
    reducers: {
        addTask: (state, action) => { state.list.push(action.payload) },
        updateTask: (state, action) => { 
            const { index, updatedTask } = action.payload;
            state.list[index] = {...state.list[index], ...updatedTask}
        },
        deleteTask: (state, action) => { state.list.splice(action.payload, 1) },
    }
})

export const {addTask,updateTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;