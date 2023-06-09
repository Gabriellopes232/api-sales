import express from 'express';
import cors from 'cors';
import routes from './routes'
import { apiErrorValidator } from '../middlewares/error';
import '@shared/typeorm';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(apiErrorValidator);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

app.use(errors);
