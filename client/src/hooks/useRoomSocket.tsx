import { useEffect, useState } from 'react';
import { socket } from '../pages/chat/Chat';
import { useAppSelector } from '../redux/hooks/hooks';

export interface usersSocketTypes {
   user_id: string;
   name: string;
   avatar: string;
}

const useRoomSocket = () => {
   const [users, setUsers] = useState<usersSocketTypes[]>([]);

   const room_id = useAppSelector((state) => state.roomReducer.room_id);
   const user = useAppSelector((state) => state.authUserReducer.user);

   //eslint-disable-next-line

   useEffect(() => {
      if (room_id && user) {
         const userName =
            user.user_metadata.full_name ?? `user${user.id.slice(0, 3)}`;

         const data = {
            room_id,
            user: {
               user_id: user?.id,
               name: userName,
               avatar: user.user_metadata?.avatar_url,
            },
         };

         socket.emit('joinToRoom', data);
      }
      // eslint-disable-next-line
   }, [room_id]);

   useEffect(() => {
      socket.on('chatRoom_users', (users: usersSocketTypes[]) => {
         setUsers(users);
      });

      return () => {
         socket.off('chatRoom_users');
      };
   }, []);

   return { users };
};

export default useRoomSocket;
