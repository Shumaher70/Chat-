import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface roomsType {
   trigger: boolean;
   room: string;
}

const initialState: roomsType = {
   trigger: false,
   room: '',
};

const roomsSlice = createSlice({
   name: 'rooms',
   initialState,
   reducers: {
      changeRoomAction: (state, action: PayloadAction<boolean>) => {
         state.trigger = action.payload;
      },
      getRoomAction: (state, action: PayloadAction<string>) => {
         state.room = action.payload;
      },
   },
});

export const { changeRoomAction, getRoomAction } = roomsSlice.actions;

export default roomsSlice.reducer;
