import express from 'express';
import {
   getUserController,
   postUserController,
} from '../controllers/users.controller';

const router = express.Router();

router.post('/add', postUserController);
router.get('/get/:id', getUserController);

export default router;
