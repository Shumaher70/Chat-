import { Socket } from 'socket.io';
import { allUsers } from '../variables';
import { joinToRoom } from '../server.types';
import { io } from '../server';

export const leaveRoomEvent = (socket: Socket) => {
   socket.on('leaveRoom', (user: joinToRoom) => {
      const { room_id } = user;
      const { user_id } = user.user;
      socket.leave(room_id);
      const userIndex = allUsers.findIndex((user) => user.user_id === user_id);

      if (userIndex !== -1) {
         allUsers.splice(userIndex, 1);
      }

      io.to(room_id).emit('chatRoom_users', allUsers);
   });
};
