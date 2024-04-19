import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface roomsType {
   trigger: boolean;
   room: string | null;
   room_id: string | null;
}

const initialState: roomsType = {
   trigger: false,
   room: null,
   room_id: null,
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
      getRoomIdAction: (state, action: PayloadAction<string | null>) => {
         state.room_id = action.payload;
      },
   },
});

export const { changeRoomAction, getRoomAction, getRoomIdAction } =
   roomsSlice.actions;

export default roomsSlice.reducer;
