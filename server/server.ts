import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

import { allUserType, messageType, roomType } from './server.types';

const app = express();

app.use(cors());

const server = http.createServer(app);

let chatRoom: string = '';
let allUsers: allUserType[] = [];
let allMessages: messageType[] = [];

const io = new Server(server, {
   cors: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST'],
   },
});

io.on('connection', (socket) => {
   socket.on('room', () => {
      const usersInRoom = allUsers.filter((user) => chatRoom === user.room);

      socket.emit('room', usersInRoom);
   });

   socket.on('joinRoom', (data: roomType) => {
      const { room, userName, avatar_url } = data;

      socket.join(room);

      chatRoom = room;
      const name = userName ? userName : `user${socket.id.slice(0, 5)}`;

      allUsers.push({
         id: socket.id,
         room,
         userName: name,
         avatar_url: avatar_url,
      });

      const usersInRoom = allUsers.filter((room) => chatRoom === room.room);

      socket.on('message', (data: messageType) => {
         allMessages.push(data);

         const roomMessages = allMessages.filter(
            (message) => chatRoom === message.room
         );

         io.to(chatRoom).emit('message', roomMessages);
      });

      io.to(chatRoom).emit('room', usersInRoom);
   });
});

server.listen(4000, () => 'Server is running on port 4000');
