// import Elysia from "elysia";
import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

// import schema
import schema from '../schema';

// create the connection
const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

// set logger on develop and local
const logger = process.env.NODE_ENV !== "production" ? true : false

export const db = drizzle(connection, { schema, logger })

/**
 * Injecting the database as a decorator into Elysia Plugin. We will add 
 * this plugin to our main Elysia app.
 */
// export default new Elysia().decorate('db', () => db);