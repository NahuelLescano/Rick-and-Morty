const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: "postgres://default:cmxu5vwNfyT8@ep-dry-paper-11309134-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
});

module.exports = pool;
