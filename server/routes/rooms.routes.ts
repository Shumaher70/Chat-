import express from 'express';
import {
   getRoomsController,
   getRoomController,
   createRoomController,
   deleteUserController,
} from '../controllers/rooms.controller';

const router = express.Router();

router.get('/get', getRoomsController);
router.get('/get/:id', getRoomController);
router.post('/create', createRoomController);
router.delete('/remove', deleteUserController);

export default router;
