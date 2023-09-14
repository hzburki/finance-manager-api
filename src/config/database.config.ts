import Elysia from "elysia";
import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

// create the connection
const connection = connect({
  host: Bun.env["DATABASE_HOST"],
  username: Bun.env["DATABASE_USERNAME"],
  password: Bun.env["DATABASE_PASSWORD"],
});

/**
 * Injecting the database as a decorator into Elysia Plugin. We will add 
 * this plugin to our main Elysia app.
 */
export default new Elysia().decorate('db', () => drizzle(connection))