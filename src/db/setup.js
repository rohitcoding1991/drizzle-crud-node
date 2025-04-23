const mysql = require('mysql2');
const { drizzle } = require('drizzle-orm/mysql2');

if (!process.env.DB_URL) {
  throw new Error("DB credentials error");
}

const connection = mysql.createConnection(process.env.DB_URL);

const db = drizzle(connection);

module.exports = { db };
