import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { connectDb } from './config/dbconfig';
import userRoutes from "./routes/userRoutes";

const app: Express = express();
const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 5001;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// routes
app.use("/users", userRoutes);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});

