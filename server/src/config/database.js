import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

const DB_URL = process.env.DATABASE_URL;
const DB_NAME = 'audiobook_db';
const DB_USER = 'postgress';
const DB_PASSWORD = 'password';

const sequelize = DB_URL
  ? new Sequelize(DB_URL, { logging: false })
  : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432, // Updated port for PostgreSQL
      logging: false,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default sequelize;
