const pgPromise = require('pg-promise');
const promise = require('bluebird');
import { v4 as uuidv4 } from 'uuid';
require('dotenv').config();

const pgp = pgPromise({ promiseLib: promise, noLocking: true });

const dbUrl = process.env.DB_URL;

const db = pgp(dbUrl);

module.exports = db;
