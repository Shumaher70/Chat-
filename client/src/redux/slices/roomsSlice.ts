import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface roomsType {
   roomName: string | null;
   room_id: string | null;
   user_id: string | null;
   room_label: string | null;
}

const initialState: roomsType = {
   roomName: null,
   room_id: null,
   user_id: null,
   room_label: null,
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
      refreshRoomAction: (state) => {
         state.roomName = null;
         state.room_id = null;
         state.user_id = null;
         state.room_label = null;
      },
   },
});

export const { getRoomAction, getRoomIdAction, refreshRoomAction } =
   roomsSlice.actions;

export default roomsSlice.reducer;
