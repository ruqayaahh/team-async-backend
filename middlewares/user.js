import applicationSchema from '../validation';
import { findUserProfile } from '../services';

const validateApplication = (req, res, next) => {
  try {
    const { error } = applicationSchema.validate(req.body);
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
      message: 'Something went wrongy.',
    });
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    const applicant = await findUserProfile(req.body.email);
    if (applicant) {
      return next();
    }
    return res.status(400).json({
      status: 'Fail',
      message: 'You need to signup or login.',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong actually.',
    });
  }
};

export {
  validateApplication,
  getUserProfile,
};
