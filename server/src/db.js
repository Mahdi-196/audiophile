"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'your_db_user',
    host: 'localhost',
    database: 'audiobook_db',
    password: 'your_db_password',
    port: 5432,
});
exports.default = pool;
