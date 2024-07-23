import { Client } from "pg";

/**
 * A simple migration runner for creating tables in the database.
 *
 * Usage: `npm run migrate`
 */
(async () => {
  const db = new Client("postgres://postgres:postgres@localhost:5432/postgres");
  await db.connect();

  await db.query("DROP TABLE IF EXISTS example_table");
  await db.query(`
    CREATE TABLE example_table (
      id UUID PRIMARY KEY,
      name VARCHAR NOT NULL
    );
  `);

  await db.end();
})();
