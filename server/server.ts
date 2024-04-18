import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

import bodyParser from 'body-parser';
import { handleConnect } from './sockets/connectEvent';

import usersRoutes from './routes/users.routes';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', usersRoutes);

const server = http.createServer(app);
const io = new Server(server, {
   cors: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST'],
   },
});

io.on('connection', (socket) => {
   handleConnect(socket);
});

server.listen(4000, () => console.log('Server is running on port 4000'));
