import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Sequelize } from "sequelize";
import bookRoutes from './routes/bookRoutes.js';
import 'dotenv/config';

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 3001; // Updated port to 3001
// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
// Simple test route
app.use('/api', bookRoutes);
// Import your routes here (if you have them)
// import bookRoutes from "./routes/bookRoutes";
// app.use("/api/books", bookRoutes);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();

export default app;