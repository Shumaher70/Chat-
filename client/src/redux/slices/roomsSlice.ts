import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface roomsType {
   roomName: string | null;
   room_id: string | null;
}

const initialState: roomsType = {
   roomName: null,
   room_id: null,
};

const roomsSlice = createSlice({
   name: 'rooms',
   initialState,
   reducers: {
      getRoomAction: (state, action: PayloadAction<string>) => {
         state.roomName = action.payload;
      },
      getRoomIdAction: (state, action: PayloadAction<string | null>) => {
         state.room_id = action.payload;
      },
   },
});

export const { getRoomAction, getRoomIdAction } = roomsSlice.actions;

export default roomsSlice.reducer;
