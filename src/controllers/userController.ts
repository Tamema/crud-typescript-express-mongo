import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/userModel';

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    await user.save();
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export {addUser}; 