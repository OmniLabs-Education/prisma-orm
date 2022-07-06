import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { FindUserController } from '../controllers/FindUserController';

const router = Router();

const createUser = new CreateUserController();
const findUser = new FindUserController();

router.post('/user', createUser.handle)
router.get('/user/:id', findUser.handle)

export { router };