import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RoomType } from '../../hooks/useGetRooms';

interface roomsType {
   roomName: string | null;
   room_id: string | null;
   user_id: string | null;
   room_label: string | null;
   rooms: RoomType[];
}

const initialState: roomsType = {
   roomName: null,
   room_id: null,
   user_id: null,
   room_label: null,
   rooms: [],
};

const roomsSlice = createSlice({
   name: 'rooms',
   initialState,
   reducers: {
      getRoomNameAction: (state, action: PayloadAction<string>) => {
         state.roomName = action.payload;
      },
      getRoomIdAction: (state, action: PayloadAction<string | null>) => {
         state.room_id = action.payload;
      },

      getRoomsAction: (state, action: PayloadAction<RoomType[]>) => {
         state.rooms = action.payload;
      },
      deleteRoomAction: (state, action: PayloadAction<string>) => {
         const array = state.rooms.filter(
            (room) => room.room_id !== action.payload
         );
         state.rooms = state.rooms.filter(
            (room) => room.room_id !== action.payload
         );
      },

      refreshRoomAction: (state) => {
         state.roomName = null;
         state.room_id = null;
         state.user_id = null;
         state.room_label = null;
      },
   },
});

export const {
   getRoomNameAction,
   getRoomIdAction,
   refreshRoomAction,
   getRoomsAction,
   deleteRoomAction,
} = roomsSlice.actions;

export default roomsSlice.reducer;
