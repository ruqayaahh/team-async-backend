import db from '../db/setup';
import { generateUUID } from '../utils';
import { fetchUserByEmail, insertUserApplication } from '../db/queries/user';

const findUserProfile = async (email) => db.oneOrNone(fetchUserByEmail, [email]);
const newApplication = async (data) => {
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

export {
  findUserProfile,
  newApplication,
};
