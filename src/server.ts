/* eslint-disable import/first */
import express, { json } from 'express';
import routes from './routes/index';

const app = express();

import './database/index';

app.use(json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server running at port 3333');
});

export default app;
