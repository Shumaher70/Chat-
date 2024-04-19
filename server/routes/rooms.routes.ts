import express from 'express';
import { getRoomController } from '../controllers/rooms.controller';

const router = express.Router();

router.get('/get', getRoomController);

export default router;
