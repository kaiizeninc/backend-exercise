import express from "express";
import { Client } from "pg";
import { registerRoutes } from "./routes";

/**
 * The entry point for the backend server. This connects to the database,
 * provides that connection to each route, and exposes an Express HTTP server on
 * port 3000.
 * 
 * See the `routes.ts` file for routes.
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
