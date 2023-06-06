
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { cyan } from 'ansi-colors';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@practice-cluster.6mnuo4t.mongodb.net/?retryWrites=true&w=majority`;

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URL);
    console.log(cyan.bold('MongoDB Connected'));
  } catch (error) {
    console.log(error);
  }
};
