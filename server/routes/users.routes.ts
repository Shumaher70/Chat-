import express from 'express';
import {
   getUserController,
   postUserController,
   putUserController,
} from '../controllers/users.controller';

const router = express.Router();

router.post('/add', postUserController);
router.get('/get/:id', getUserController);
router.put('/updateuser/:id', putUserController);

export default router;
