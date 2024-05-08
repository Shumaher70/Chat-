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
   const { user_id, name, avatar } = useAppSelector(
      (state) => state.userReducer
   );

   //eslint-disable-next-line

   useEffect(() => {
      if (room_id && user_id) {
         const userName = name ?? `user${user_id!.slice(0, 3)}`;

         const data = {
            room_id,
            user: {
               user_id: user_id,
               name: userName,
               avatar: avatar,
            },
         };

         socket.emit('joinToRoom', data);
      }
      // eslint-disable-next-line
   }, [room_id]);

   useEffect(() => {
      socket.on('chatRoom_users', (users: usersSocketTypes[]) => {
         const newUsers = users.filter((user) => user.user_id !== user_id);

         setUsers(newUsers);
      });

      return () => {
         socket.off('chatRoom_users');
      };
   }, []);

   return { users };
};

export default useRoomSocket;
