import { Pool } from 'pg';
import pool from './db';
import bcrypt from 'bcrypt';

export const seedDatabase = async (pool: Pool) => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
      );
    `);

    const hashedPassword1 = await bcrypt.hash('password1', 10);
    const hashedPassword2 = await bcrypt.hash('password2', 10);
    const hashedPassword3 = await bcrypt.hash('password3', 10);

    await client.query(`
      INSERT INTO users (email, password)
      VALUES
        ('user1@example.com', $1),
        ('user2@example.com', $2),
        ('user3@example.com', $3);
    `, [hashedPassword1, hashedPassword2, hashedPassword3]);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database', err);
  } finally {
    client.release();
  }
};

if (require.main === module) {
  seedDatabase(pool).then(() => process.exit(0));
}
