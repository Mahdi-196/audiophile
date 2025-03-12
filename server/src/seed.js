"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = void 0;
const db_1 = __importDefault(require("./db"));
const seedDatabase = (pool) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        yield client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        subscription_status BOOLEAN NOT NULL
      );
    `);
        yield client.query(`
      INSERT INTO users (username, email, password, subscription_status)
      VALUES
        ('user1', 'user1@example.com', 'password1', true),
        ('user2', 'user2@example.com', 'password2', false),
        ('user3', 'user3@example.com', 'password3', true);
    `);
        console.log('Database seeded successfully');
    }
    catch (err) {
        console.error('Error seeding database', err);
    }
    finally {
        client.release();
    }
});
exports.seedDatabase = seedDatabase;
if (require.main === module) {
    (0, exports.seedDatabase)(db_1.default).then(() => process.exit(0));
}
