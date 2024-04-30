import { socket } from '../pages/chat/Chat';
import { useAppSelector } from '../redux/hooks/hooks';

const useLeaveRoomSocket = () => {
   const room_id = useAppSelector((state) => state.roomReducer.room_id);
   const user = useAppSelector((state) => state.userReducer);

   const handleLeaveRoom = () => {
      if (room_id && user) {
         const data = {
            room_id,
            user: {
               user_id: user.user_id,
               name: user.name,
               avatar: user.avatar,
            },
         };
         socket.emit('leaveRoom', data);
      }
   };

   return { handleLeaveRoom };
};

export default useLeaveRoomSocket;
