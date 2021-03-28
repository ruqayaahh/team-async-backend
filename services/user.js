import { generateUUID } from '../utils';
import db from '../db/setup';
import { getUserByEmail, insertNewUser, fetchUserByEmail, insertUserApplication } from '../db/queries/user';

export const getSingleUserByEmail = async (email) => db.oneOrNone(getUserByEmail, [email]);

export const addNewUser = async (data) => {
  const id = generateUUID();
  const {
    email, fullName, password, phone,
  } = data;
  return db.none(insertNewUser, [id, fullName, email, phone, password]);
};

export const findUserProfile = async (email) => db.oneOrNone(fetchUserByEmail, [email]);

export const newApplication = async (data) => {
  const id = generateUUID();
  const batchId = generateUUID();
  const {
    firstName, lastName, email, dob, age, address, university, course, cgpa, cv, photo,
  } = data;
  db.one(insertUserApplication, [
    id,
    firstName,
    lastName,
    email,
    dob,
    age,
    address,
    university,
    course,
    cgpa,
    cv,
    photo,
    batchId]);
};
