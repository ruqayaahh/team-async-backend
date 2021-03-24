import { Router } from 'express';
import registerNewUser from '../controllers';
import { validateNewUserData, checkIfUserAlreadyExists } from '../middlewares';

const userRouter = Router();

userRouter.post('/register', validateNewUserData, checkIfUserAlreadyExists, registerNewUser);

export default userRouter;