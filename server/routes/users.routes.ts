import express from 'express';
import { postUserController } from '../controllers/users.controller';

const router = express.Router();

router.post('/add', postUserController);

export default router;
