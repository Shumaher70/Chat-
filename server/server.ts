import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

import { allUserType, messageType, roomType } from './server.types';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
   cors: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST'],
   },
});

let chatRoom: string = '';
let allUsers: Record<string, allUserType> = {};
let allMessages: messageType[] = [];

io.on('connection', (socket) => {
   socket.on('room', () => {
      const usersInRoom = Object.values(allUsers).filter(
         (user) => chatRoom === user.room
      );
      socket.emit('room', usersInRoom);
   });

   socket.on('joinRoom', (data: roomType) => {
      const { room, userName, avatar_url, userId } = data;
      socket.join(room);

      chatRoom = room;
      const name = userName ? userName : `user${userId.slice(0, 5)}`;

      allUsers[userId] = {
         id: userId,
         room,
         userName: name,
         avatar_url: avatar_url,
      };

      const usersInRoom = Object.values(allUsers).filter(
         (user) => chatRoom === user.room
      );
      io.to(chatRoom).emit('room', usersInRoom);
   });

   socket.on('roomMessages', () => {
      const roomMessages = allMessages.filter(
         (message) => chatRoom === message.room
      );
      io.emit('message', roomMessages);
   });

   socket.on('message', (data: messageType) => {
      allMessages.push(data);
      const roomMessages = allMessages.filter(
         (message) => chatRoom === message.room
      );
      io.emit('message', roomMessages);
   });

   socket.on('leaveRoom', ({ room, id }) => {
      socket.leave(room);
      delete allUsers[id];
      const usersInRoom = Object.values(allUsers).filter(
         (user) => chatRoom === user.room
      );
      io.emit('room', usersInRoom);
   });
});

server.listen(4000, () => console.log('Server is running on port 4000'));
