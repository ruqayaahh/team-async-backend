import express from 'express';
import logger from 'morgan';
import expressFileUpload from 'express-fileupload';
import dotenv from 'dotenv';
import userRouter from './routes';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(logger('dev'));
app.use(expressFileUpload({ useTempFiles: true }));

app.use(userRouter);

app.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(port, () => {
  console.log(`listening at Port ${port}`);
});
