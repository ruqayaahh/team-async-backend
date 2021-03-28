import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const salt = genSaltSync(10);

const jwtSecret = process.env.JWT_SECRET;

const convertDataToToken = (data) => jwt.sign(data, jwtSecret, { expiresIn: '1h' });

const verifyToken = (token) => jwt.verify(token, jwtSecret, (err, data) => ({ err, data }));

const hashPassword = (password) => hashSync(password, salt);

const comparePassword = (plainPassword, hashedPassword) => (
  compareSync(plainPassword, hashedPassword)
);

const generateUUID = () => uuidv4();

export {
  convertDataToToken, verifyToken, hashPassword, comparePassword, generateUUID,
};