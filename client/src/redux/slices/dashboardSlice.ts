import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface dashboardType {
   trigger: boolean;
   rooms: boolean;
   room: boolean;
   setting: boolean;
}

const initialState: dashboardType = {
   trigger: false,
   setting: false,
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
         console.log(state);

         state.room = action.payload;
      },
      settingAction: (state, action: PayloadAction<boolean>) => {
         state.setting = action.payload;
      },
   },
});

export const { triggerAction, roomsAction, settingAction, roomAction } =
   dashboardSlice.actions;

export default dashboardSlice.reducer;
