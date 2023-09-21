import Elysia from 'elysia';
import { connect } from '@planetscale/database'
import { drizzle } from 'drizzle-orm/planetscale-serverless'

// import schema
import schema from '../schema';

// create the connection
const connection = connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
})

// set logger on develop and local
const logger = process.env.NODE_ENV !== "production" ? true : false

const db = drizzle(connection, { schema, logger })
const databaseConfig = new Elysia({ name: "databaseConfig" })
  .decorate('db', () => db)

export default databaseConfig
export type dbType = typeof db