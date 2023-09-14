import Elysia from "elysia";
import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

// create the connection
const db = drizzle(connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
}));

/**
 * Injecting the database as a decorator into Elysia Plugin. We will add 
 * this plugin to our main Elysia app.
 */
export default new Elysia().decorate('db', () => db);