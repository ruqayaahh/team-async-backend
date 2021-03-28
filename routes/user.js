import { Router } from 'express';
import { registerNewUser, loginUser, createApplication } from '../controllers';
import {
  authenticate, validateNewUserData, checkIfUserAlreadyExists, validateLoginData,
  cloudinaryUpload, validateApplication, getUserProfile,
} from '../middlewares';

const userRouter = Router();

userRouter.post('/register', validateNewUserData, checkIfUserAlreadyExists, registerNewUser);
userRouter.post('/login', validateLoginData, loginUser);
userRouter.post('/application', authenticate, cloudinaryUpload, validateApplication, getUserProfile, createApplication);

export default userRouter;
