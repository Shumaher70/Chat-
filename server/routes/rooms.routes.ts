import express from 'express';
import {
   getRoomsController,
   getRoomController,
   createRoomController,
} from '../controllers/rooms.controller';

const router = express.Router();

router.get('/get', getRoomsController);
router.get('/get/:id', getRoomController);
router.post('/create', createRoomController);

export default router;
