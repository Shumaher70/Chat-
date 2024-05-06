import { useEffect, useState } from 'react';
import { addRoomType } from '../pages/chat/components/dashboard/components/createRoom/CreateRoom';

export const handlePostRoom = async (
   room: addRoomType,
   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
   setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
   setError: React.Dispatch<
      React.SetStateAction<{ error: boolean; message: string | null }>
   >
): Promise<void> => {
   try {
      setLoading(true);
      const response = await fetch('http://localhost:4000/api/rooms/create', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            room,
         }),
      });

      if (response.ok) {
         setLoading(false);
         setSuccess(true);
         const room = await response.json();

         setError({ error: room.error, message: room.message });
         return await room;
      } else {
         setLoading(false);
         setError({ error: true, message: 'Request failed' });
         throw new Error(`Error: ${response.statusText}`);
      }
   } catch (error) {
      setLoading(false);
      setError({
         error: true,
         message: 'server error',
      });

      console.error(
         `Something went wrong when creating a new room in useCreateRoom: ${error}`
      );
   }
};

const useCreateRoom = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const [success, setSuccess] = useState<boolean>(false);
   const [error, setError] = useState<{
      error: boolean;
      message: string | null;
   }>({
      error: false,
      message: null,
   });

   useEffect(() => {
      const timer = setTimeout(() => {
         setSuccess(false);
      }, 2000);

      return () => {
         clearTimeout(timer);
      };
   }, [loading]);

   const handleSend = async (room: addRoomType) => {
      await handlePostRoom(room, setLoading, setSuccess, setError);
   };

   return { handleSend, loading, success, error };
};

export default useCreateRoom;
