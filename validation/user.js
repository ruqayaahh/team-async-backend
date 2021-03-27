import Joi from 'joi';

const applicationSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        dob: Joi.number().pattern(new RegExp('^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$')).required(),
        address: Joi.string().alphanum().required(),
        university: Joi.string().required(),
        course: Joi.string().required(),
        cgpa: Joi.number().pattern(new RegExp('^\d{1}[.]\d{2}$').required(),
        cv: Joi.string().required(),
        photo: Joi.string().required(),
      });
});

export default applicationSchema;