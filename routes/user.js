export {};
const Router = require('express');

const cloudinaryUpload = require('../middleware');

const applyRouter = Router();

applyRouter.post('/application', cloudinaryUpload);

export default applyRouter;



// authenticate,
// import createApplication from '../controllers/';validateApplication, getUserDetailsViaEmail, createApplication