import db from '../db/setup';
import getAdminByEmail from '../db/queries/admin';

const getSingleAdminByEmail = async (email) => db.oneOrNone(getAdminByEmail, [email]);

export default getSingleAdminByEmail;