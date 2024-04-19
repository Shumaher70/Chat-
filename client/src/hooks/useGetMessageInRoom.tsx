import { useEffect, useState } from 'react';

import { useAppSelector } from '../redux/hooks/hooks';

export interface messageType {
   message_text: string;
   room_id: string;
   user_id: string;
   created_at: string;
   id: number;
}

const useGetMessageInRoom = () => {
   const [messages, setMessages] = useState<messageType[] | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const roomId = useAppSelector((state) => state.roomReducer.room_id);

   useEffect(() => {
      if (roomId)
         (async () => {
            setLoading(true);
            try {
               const response = await fetch(
                  `http://localhost:4000/api/rooms/get/${roomId}`
               );

               if (!response.ok) {
                  throw new Error('Failed to fetch messages');
               }

               const room = await response.json();

               setMessages(room.length > 0 ? room : null);
            } catch (error) {
               throw new Error(
                  `something went wrong when fetching the messages from the room `
               );
            } finally {
               setLoading(false);
            }
         })();
   }, [roomId]);

   useEffect(() => {
      if (!roomId) {
         setMessages(null);
      }
   }, [roomId]);

   return { messages, loading };
};

export default useGetMessageInRoom;
