import { Router } from 'express';
import UserModel from '../models/user.js';

const router = Router();

router.post('/registerUser', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newUser = await UserModel.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});

export default router;