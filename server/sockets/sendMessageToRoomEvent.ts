import { Socket } from 'socket.io';
import { messageType } from '../server.types';
import { v4 as uuidv4 } from 'uuid';

import { io } from '../server';

export const sendMessageToRoomEvent = (socket: Socket) => {
   socket.on('sendMessageToRoom', (data: messageType) => {
      const { user_id, room_id, message_text, name, avatar } = data;

      const created_at = new Date().toISOString();

      io.to(room_id).emit('sendMessageToRoom', {
         user_id,
         room_id,
         message_text,
         name,
         avatar,
         created_at,
         id: uuidv4(),
      });
   });
};
