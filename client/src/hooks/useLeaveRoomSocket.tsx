import { socket } from '../pages/chat/Chat';
import { useAppSelector } from '../redux/hooks/hooks';

const useLeaveRoomSocket = () => {
   const room_id = useAppSelector((state) => state.roomReducer.room_id);
   const user = useAppSelector((state) => state.authUserReducer.user);

   const handleLeaveRoom = () => {
      if (room_id && user) {
         const data = {
            room_id,
            user: {
               user_id: user?.id,
               name: user.user_metadata?.full_name,
               avatar: user.user_metadata?.avatar_url,
            },
         };
         socket.emit('leaveRoom', data);
      }
   };

   return { handleLeaveRoom };
};

export default useLeaveRoomSocket;
