import { Router } from 'express';
import { loginAdmin } from '../controllers';
import { validateAdminLoginData } from '../middlewares';

const adminRouter = Router();

adminRouter.post('/adminlogin', validateAdminLoginData, loginAdmin);

export default adminRouter;