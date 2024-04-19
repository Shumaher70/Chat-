import express from 'express';
import {
   getRoomsController,
   getRoomController,
} from '../controllers/rooms.controller';

const router = express.Router();

router.get('/get', getRoomsController);
router.get('/get/:id', getRoomController);

export default router;
