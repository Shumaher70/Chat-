import { useState } from 'react';
import { RoomType } from './useGetRooms';

export const removeRoom = async (
   room: RoomType,
   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
   setSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
   setLoading(true);
   try {
      const response = await fetch('http://localhost:4000/api/rooms/remove', {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            room,
         }),
      });

      if (!response.ok) {
         throw new Error('something went wrong send data to server');
      }

      setLoading(false);
      setSuccess(true);
      return await response.json();
   } catch (error: any) {
      console.error(
         `error something went wrong send data to server ${error.message}`
      );
   }
};

const useRemoveRoom = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const [success, setSuccess] = useState<boolean>(false);

   const handleRemoveRoom = async (room: RoomType) => {
      await removeRoom(room, setLoading, setSuccess);
   };

   return {
      handleRemoveRoom,
      loading,
      success,
   };
};

export default useRemoveRoom;
