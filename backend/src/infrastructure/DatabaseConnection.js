import dotenv from "dotenv";
dotenv.config();

import { Pool } from "pg";
class DatabaseConnection {
  constructor() {
    this.pool = new Pool({
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST,
      port: process.env.PGPORT,
      database: process.env.PGDATABASE,
      max: 10,
      idleTimeoutMillis: 30000, // default 30s
      connectionTimeoutMillis: 10000, // wait up to 10s for connection
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  async query(text, params) {
    try {
      const result = await this.pool.query(text, params);

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default DatabaseConnection;
