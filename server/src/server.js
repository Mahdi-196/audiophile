<<<<<<< HEAD
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

=======
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.js";
import bookRoutes from './routes/bookRoutes.js';
import 'dotenv/config';


dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 5000;
// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
// Simple test route
app.use('/api', bookRoutes);
// Import your routes here (if you have them)
// import bookRoutes from "./routes/bookRoutes";
// app.use("/api/books", bookRoutes);
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
});
>>>>>>> refs/remotes/origin/Andrew
export default app;