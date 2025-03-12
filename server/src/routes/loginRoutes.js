import { Router } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password, sshPublicKey } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const user = await UserModel.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (sshPublicKey) {
      user.sshPublicKey = sshPublicKey;
      await user.save();
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in', error });
  }
});

export default router;