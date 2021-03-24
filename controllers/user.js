import { addNewUser } from '../services';

import { hashPassword } from '../utils';

const registerNewUser = async (req, res) => {
  try {
    const encryptedPassword = hashPassword(req.body.password);
    const userInfo = {
      ...req.body,
      password: encryptedPassword,
    };
    const updatedUserInfo = await addNewUser(userInfo);
    // delete updatedUserInfo.password;
    res.status(201).json({
      status: 'Success',
      message: 'Registration successful',
    //   data: updatedUserInfo,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

export default registerNewUser;