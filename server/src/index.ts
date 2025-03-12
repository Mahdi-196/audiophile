import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DATABASE_URL);

const app = express();
const pool = new Pool({
  user: 'postgress',
  host: 'localhost',
  database: 'audiobook_db',
  password: 'password',
  port: 5432, // Updated port for PostgreSQL
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

export { pool };

const PORT = process.env.PORT || 30001; // Updated server port to 30001

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/users', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching users', err);
    res.status(500).send('Server error');
  }
});

app.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user', err);
    res.status(500).send('Server error');
  }
});

app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }
    const user = userCheck.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('Error logging in user', err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
