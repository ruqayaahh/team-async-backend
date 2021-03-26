import Joi from 'joi';

const loginAdminSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).required(),
});

export default loginAdminSchema;