import { addNewUser, getSingleUserByEmail, updateUserPassword } from '../services';

import { hashPassword, comparePassword, convertDataToToken } from '../utils';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const registerNewUser = async (req, res) => {
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

export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await getSingleUserByEmail(email);
      if (user && comparePassword(password, user.password)) {
        const token = convertDataToToken({ email, id: user.user_id });
        // delete user.password;
        return res.status(201).json({
          status: 'Success',
          message: 'Login successful',
          token: token,
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

export const resetPassword = async (req, res) => {
  const password = process.env.PASSWORD;
  const senderEmail = process.env.SENDER_EMAIL;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: senderEmail,
      pass: password,
    },
  });
  try {
    const { email } = req.body;
    const user = await getUserByEmail(email);
    const userToken = addDataToToken({
      email,
      id: user.id,
    });
    const mailOptions = await transporter.sendMail({
      from: '"Password Ninja" <abidemirolake@gmail.com>',
      to: "successologunsua@gmail.com", // list of receivers
      subject: "Reset Password", // Subject line
      text: '<a href="/resetpassword/' + user.id + '/' + userToken + '">Reset password</a>', // user.id not required since we are adding to token
      html: '<a href="/resetpassword/' + user.id + '/' + userToken + '">Reset password</a>'
    });
    res.status(200).json({
      status: 'success',
      message: 'password reset link sent successfully.',
    });
    console.log("Message sent: %s", mailOptions .messageId);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong ',
    });
  }
  
}

export const updatePassword = async (req, res) => {
  try {
    const hashedPassword = hashPassword(req.body.password)
    const usermail = await getUserById(req.params.id)// demola said we don't need this
    if (usermail.email === req.body.email) {
      const updatedUser = await updateUserPassword({ ...req.body, password: hashedPassword}, req.params.id);
    res
      .status(201)
      .json({ status: 'success', message: 'Password updated successfully.', data: updatedUser });
    } else {
      console.log('usermail')
      res
      .status(201)
      .json({ status: 'fail', message: 'You must be a thief'});
    }
} catch (error) {
    console.log(error)
    console.log(usermail)
  res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
}
};