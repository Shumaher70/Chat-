import express from 'express';
import { postMessageController } from '../controllers/messages.controller';

const router = express.Router();

router.post('/room', postMessageController);

export default router;
