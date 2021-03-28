import Router from 'express';

import { cloudinaryUpload, validateApplication } from '../middlewares';
import createApplication from '../controllers';

const userRouter = Router();

userRouter.post('/application', cloudinaryUpload, validateApplication, createApplication);

export default userRouter;

// userRouter.post('/application', authenticate, getUserProfile);
// authenticate,
// cloudinaryUpload,
// validateApplication,
// getUserProfile,
// createApplication
