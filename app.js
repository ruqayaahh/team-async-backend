import express, { json } from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import userRouter from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(json());
app.use(logger('combined'));

app.get('/', (req, res) => res.json({ welcome: 'hello' }));
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});