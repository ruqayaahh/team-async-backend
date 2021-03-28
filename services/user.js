import { generateUUID } from '../utils';
import db from '../db/setup';
import { getUserByEmail, insertNewUser, updateUserPasswordById } from '../db/queries/user';

export const getSingleUserByEmail = async (email) => db.oneOrNone(getUserByEmail, [email]);

export const addNewUser = async (data) => {
    const id = generateUUID();
    const {
        email, fullName, password, phone,
    } = data;
  return db.none(insertNewUser, [id, fullName, email, phone, password]);
}

export const updateUserPassword = async (data, userId) => {
  const { email, password } = data;
  return db.one(updateUserPasswordById, [email, password, userId]);
};