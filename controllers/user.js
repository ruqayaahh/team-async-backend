import { newApplication } from '../services';

const createApplication = async (req, res) => {
  const { body } = req;
  try {
    const applicantDeets = await newApplication(body);
    res.status(201).json({
      status: 'success',
      message: 'Registration successful.',
      data: applicantDeets,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wronger.',
    });
  }
};

export default createApplication;
