import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './src/schema.js';
import cors from 'cors';
import { verifyUser } from './src/middlewares/auth.js';

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use(
  '/graphql',
  verifyUser,
  graphqlHTTP(() => ({
    schema: schema,
    graphiql: true,
  }))
);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
mongoose.connection.on('open', () => console.log('Database Connected.'));

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
