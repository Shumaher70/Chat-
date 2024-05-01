import { allUsers, chatRoom } from '../variables';
import { Socket } from 'socket.io';
import { joinToRoom, userType } from '../server.types';
import { io } from '../server';

export const joinToRoomEvent = (socket: Socket) => {
   socket.on('joinToRoom', (data: joinToRoom) => {
      const { room_id } = data;
      const { user_id, name, avatar } = data.user;

      socket.join(room_id);
      chatRoom.room = room_id;

      const userIndex = allUsers.findIndex((user) => user.user_id === user_id);

      if (userIndex !== -1) {
         allUsers[userIndex].room_id = room_id;
         allUsers[userIndex].user_id = user_id;
         allUsers[userIndex].name = name;
         allUsers[userIndex].avatar = avatar;
      } else {
         allUsers.push({
            room_id,
            user_id,
            name,
            avatar,
            socket_id: socket.id,
         });
      }

      const usersInRoom: userType[] = allUsers.filter(
         (user) => user.room_id === room_id
      );

      io.to(room_id).emit('chatRoom_users', usersInRoom);
   });
};
