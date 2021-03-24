import Joi from 'joi';

const signUpSchema = Joi.object({
  fullName: Joi.string().trim().min(5).max(100).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().regex(/^[0-9]{7,15}$/).required(),
  password: Joi.string().trim().min(8).required(),
});

export default signUpSchema;
