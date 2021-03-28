import { Router } from 'express';
import { registerNewUser, loginUser, createApplication } from '../controllers';
import { validateNewUserData, checkIfUserAlreadyExists, validateLoginData, cloudinaryUpload, validateApplication } from '../middlewares';

const userRouter = Router();

userRouter.post('/register', validateNewUserData, checkIfUserAlreadyExists, registerNewUser);
userRouter.post('/login', validateLoginData, loginUser);
userRouter.post('/application', cloudinaryUpload, validateApplication, createApplication);

// authenticate,
// cloudinaryUpload,
// validateApplication,
// getUserProfile,
// createApplication

export default userRouter;
