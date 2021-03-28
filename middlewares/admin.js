import { loginAdminSchema } from '../validation';

const validateAdminLoginData = (req, res, next) => {
  try {
      const { error } = loginAdminSchema.validate(req.body);
      if (!error) {
          return next();
      }
      return res.status(400).json({
          status: 'Fail',
          message: error.message,
      });
  } catch (error) {
      return res.status(500).json({
          status: 'Fail',
          message: 'Something went wrong',
      });
  }
};

export default validateAdminLoginData;