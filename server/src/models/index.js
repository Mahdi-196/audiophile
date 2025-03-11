import Book from "./Book.js";
import { Sequelize } from 'sequelize';
import config from '../config/database.js'; // Adjust the path as needed

const sequelize = new Sequelize(config.database, config.username, config.password, config);

export { Book, sequelize };
