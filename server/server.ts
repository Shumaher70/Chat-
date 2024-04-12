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
      const { room, userName, avatar_url, userId } = data;

      chatRoom = room;
      const name = userName ? userName : `user${userId.slice(0, 5)}`;

      const existingUser = allUsers.find(
         (user) => user.id === userId && user.room === room
      );

      if (existingUser) {
         existingUser.userName = name;
         existingUser.avatar_url = avatar_url;
      } else {
         allUsers.push({
            id: userId,
            room,
            userName: name,
            avatar_url: avatar_url,
         });
      }

      const usersInRoom = allUsers.filter((room) => chatRoom === room.room);

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
});

server.listen(4000, () => 'Server is running on port 4000');
