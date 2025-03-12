import { Router } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';
import sendPasswordResetLink from '../utils/sendPasswordResetLink.js';

const router = Router();

router.post('/registerUser', async (req, res) => {
  try {
    const { username, email, password, resetPassword, sshPublicKey } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
      if (resetPassword) {
        await sendPasswordResetLink(email);
        return res.status(200).json({ message: 'Password reset link sent.', exists: true });
      } else {
        return res.status(200).json({ message: 'Email already exists. Would you like to reset your password?', exists: true });
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({ username, email, password: hashedPassword, sshPublicKey });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});

export default router;