import { getSingleAdminByEmail } from '../services';

import { convertDataToToken } from '../utils';

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await getSingleAdminByEmail(email);
    if (admin && password.toString() === admin.password.toString()) {
      const token = convertDataToToken({ email, id: admin.admin_id });
      return res.status(201).json({
        status: 'Success',
        message: 'Login successful',
        token: token,
        deets: {
          image: admin.photo_url,
          adminName: admin.full_name,
          adminEmail: email,
        }
      });
    }
    return res.status(401).json({
      status: 'Fail',
      message: 'Invalid login details',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

export default loginAdmin;