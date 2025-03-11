module.exports = {
  development: {
    username: process.env.DB_USER || 'postgress',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'audiobook_db',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  // other environments (test, production)...
};