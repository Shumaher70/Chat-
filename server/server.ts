import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

import bodyParser from 'body-parser';

import usersRoutes from './routes/users.routes';
import roomsRoutes from './routes/rooms.routes';
import messagesRoutes from './routes/messages.routes';
import { joinToRoomEvent } from './sockets/joinToRoomEvent';
import { leaveRoomEvent } from './sockets/leaveRoomEvent';
import { sendMessageToRoomEvent } from './sockets/sendMessageToRoomEvent';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', usersRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/messages', messagesRoutes);

const server = http.createServer(app);
export const io = new Server(server, {
   cors: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST'],
   },
});

io.on('connection', (socket) => {
   joinToRoomEvent(socket);
   leaveRoomEvent(socket);
   sendMessageToRoomEvent(socket);
});

server.listen(4000, () => console.log('Server is running on port 4000'));
