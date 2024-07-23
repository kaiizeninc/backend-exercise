import type { Application } from "express";
import type { Client } from "pg";
import express from "express";

export function registerRoutes(app: Application, db: Client) {
  app.use(express.static("src/static"));

  app.get("/db-test", async (req, res) => {
    const result = await db.query("SELECT $1::text as message", [
      "Hello from the database!",
    ]);
    const msg = result.rows[0].message;
    res.send(msg);
  });
}
