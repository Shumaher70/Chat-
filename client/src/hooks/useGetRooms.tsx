import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRoomsAction } from '../redux/slices/roomsSlice';

export interface RoomType {
   id: string;
   room_id: string;
   room_name: string;
   user_id: string;
   room_label: string;
}

const getRoom = async (
   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
   dispatch: Dispatch<UnknownAction>
) => {
   setLoading(true);
   try {
      const response = await fetch('http://localhost:4000/api/rooms/get');
      const rooms = await response.json();
      if (rooms.length > 0) {
         dispatch(getRoomsAction(rooms));
      }
   } catch (error: any) {
      console.error(`something went wrong at getting rooms ${error.message}`);
   } finally {
      setLoading(false);
   }
};

const useGetRooms = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const dispatch = useDispatch();

   const handleGetRooms = async () => {
      await getRoom(setLoading, dispatch);
   };

   return { loading, handleGetRooms };
};

export default useGetRooms;
