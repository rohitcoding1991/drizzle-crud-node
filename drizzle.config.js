const { defineConfig } = require('drizzle-kit');

if (!process.env.DB_URL) {
  throw new Error("DB URL is missing");
}

module.exports = defineConfig({
  schema: './src/db/schema.js',
  out: './src/db/migrations',
  dbCredentials: {
    url: process.env.DB_URL,
  },
  dialect: 'mysql',
});

