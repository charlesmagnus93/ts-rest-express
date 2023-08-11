import { createExpressEndpoints } from '@ts-rest/express';
import express from 'express';
import cors from 'cors';
import { postController, postRouter } from './src/post'

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

createExpressEndpoints(postController, postRouter, app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});