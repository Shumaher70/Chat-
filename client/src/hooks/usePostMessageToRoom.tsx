import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
import { socket } from '../pages/chat/Chat';

export const handlePostMessageInRoom = async (
   room_id: string,
   user_id: string,
   message_text: string
) => {
   try {
      const request = await fetch('http://localhost:4000/api/messages/room', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            room_id,
            user_id,
            message_text,
         }),
      });

      if (request.ok) {
         return request.json();
      }
   } catch (error) {
      throw new Error(
         `something went wrong at getting message from server ${error}`
      );
   }
};

const usePostMessageToRoom = () => {
   const room_id = useAppSelector((state) => state.roomReducer.room_id);
   const user_id = useAppSelector((state) => state.userReducer.user_id);
   const [message_text, setMessage_text] = useState<string>('');
   const [loading, setLoading] = useState(false);
   const [trigger, setTrigger] = useState<number>(0);

   useEffect(() => {
      (async () => {
         if (!room_id) {
            throw new Error(
               'something went wrong when trying to get "room_id" from usePostMessageToRoom'
            );
         }

         if (!user_id) {
            throw new Error(
               'something went wrong when trying to get "user_id" from usePostMessageToRoom'
            );
         }

         if (!message_text) return;

         try {
            setLoading(true);
            await handlePostMessageInRoom(room_id, user_id, message_text);
         } catch (error) {
            throw new Error(`something while sending message ${error}`);
         } finally {
            setLoading(false);
         }
      })();
   }, [message_text, room_id, user_id, trigger]);
   //socket send message

   useEffect(() => {
      if (!message_text) return;
      socket.emit('sendMessageToRoom', { room_id, user_id, message_text });
      // eslint-disable-next-line
   }, [message_text, trigger]);

   return { setMessage_text, loading, setTrigger };
};

export default usePostMessageToRoom;
