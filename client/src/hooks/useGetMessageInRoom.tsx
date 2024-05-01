import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import { socket } from '../pages/chat/Chat';

export interface messageType {
   message_text: string;
   room_id: string;
   user_id: string;
   created_at: string;
   id: number | string;
   name: string;
   avatar: string;
}

const useGetMessageInRoom = () => {
   const [messages, setMessages] = useState<messageType[] | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const roomId = useAppSelector((state) => state.roomReducer.room_id);

   useEffect(() => {
      if (!roomId) return;

      setLoading(true);
      fetchMessages(roomId)
         .then((room) => setMessages(room.length > 0 ? room : null))
         .catch((error) => console.error('Failed to fetch messages', error))
         .finally(() => setLoading(false));

      const handleMessage = (data: messageType) => {
         setMessages((prevMessages) => {
            if (!prevMessages) return [data];
            return [...prevMessages, data];
         });
      };

      socket.on('sendMessageToRoom', handleMessage);

      return () => {
         socket.off('sendMessageToRoom', handleMessage);
      };
   }, [roomId]);

   const fetchMessages = async (roomId: string): Promise<messageType[]> => {
      const response = await fetch(
         `http://localhost:4000/api/rooms/get/${roomId}`
      );

      if (!response.ok) {
         throw new Error('Failed to fetch messages');
      }

      return response.json();
   };

   useEffect(() => {
      if (!roomId) {
         setMessages(null);
      }
   }, [roomId]);

   return { messages, loading };
};

export default useGetMessageInRoom;
