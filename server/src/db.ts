// filepath: /media/sciberius1/WD 6TB/Repositories/book/audiophile/server/src/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgress',
  host: 'localhost',
  database: 'audiobook_db',
  password: 'password',
  port: 5432, // Updated port for PostgreSQL
});

export default pool;
