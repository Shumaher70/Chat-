import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface dashboardType {
   trigger: boolean;
   rooms: boolean;
   room: boolean;
   createRoom: boolean;
   setting: boolean;
}

const initialState: dashboardType = {
   trigger: false,
   setting: false,
   createRoom: false,
   rooms: true,
   room: false,
};

const dashboardSlice = createSlice({
   name: 'dashboard',
   initialState,
   reducers: {
      triggerAction: (state, action: PayloadAction<boolean>) => {
         state.trigger = action.payload;
      },
      roomsAction: (state, action: PayloadAction<boolean>) => {
         state.rooms = action.payload;
      },
      roomAction: (state, action: PayloadAction<boolean>) => {
         state.room = action.payload;
      },
      settingAction: (state) => {
         state.setting = !state.setting;
      },
      createRoomAction: (state) => {
         state.createRoom = !state.setting;
      },
   },
});

export const {
   triggerAction,
   roomsAction,
   settingAction,
   roomAction,
   createRoomAction,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
