import { createSlice } from '@reduxjs/toolkit';
import { initialState } from "./seedData";

const notificationsSlice = createSlice({
    name:'notifications',
    initialState,
    reducers: {
        //notification can additionally be called by any part of the app, triggered for every worthy event.
        // notificationAdded(state, action){
        //     state.push(action.payload)
        // },
        notificationRead(state, action){
            const { id } = action.payload
            const existingnotification = state.find(notification => notification.id === id)
            existingnotification.read_status = true;
        },
        notificationAllRead(state, action){
            state.forEach(notification => notification.read_status = true);
        }
    }
})

export const {notificationAdded, notificationRead, notificationAllRead} = notificationsSlice.actions

export default notificationsSlice.reducer