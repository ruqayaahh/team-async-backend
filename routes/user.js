import Router from 'express';
import { registerNewUser, loginUser, resetPassword, updatePassword } from '../controllers/index.js';
// import { resetPassword, updatePassword } from '../controllers/user.js';
import { validateNewUserData, checkIfUserAlreadyExists, validateLoginData } from '../middlewares/index.js';

const userRouter = Router();

userRouter.post('/register', validateNewUserData, checkIfUserAlreadyExists, registerNewUser);
userRouter.post('/login', validateLoginData, loginUser);
userRouter.post('/user/reset', resetPassword);
userRouter.post('/user/resetpassword/:id/:token', validateLoginData, updatePassword);


export default userRouter;