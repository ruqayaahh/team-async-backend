import { Router } from 'express';
import { registerNewUser, loginUser } from '../controllers';
import { validateNewUserData, checkIfUserAlreadyExists, validateLoginData } from '../middlewares';

const userRouter = Router();

userRouter.post('/register', validateNewUserData, checkIfUserAlreadyExists, registerNewUser);
userRouter.post('/login', validateLoginData, loginUser);

export default userRouter;