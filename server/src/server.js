import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index'; // Adjust the path as needed
import routes from './routes/index'; // Adjust the path as needed
import model from './models/index';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Simple test route
app.use('/api', routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
});

export default app;