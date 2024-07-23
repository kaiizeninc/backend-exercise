import express from "express";
import { Client } from "pg";
import { registerRoutes } from "./routes";

/**
 * A simple 
 */
(async () => {
  const db = new Client("postgres://postgres:postgres@localhost:5432/postgres");
  await db.connect();

  const app = express();
  const port = 3000;

  registerRoutes(app, db);

  app.listen(port, () => {
    console.log(`Server running: http://127.0.0.1:${port}`);
  });
})();
