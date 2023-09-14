import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/*",
  out: "./src/migrations",
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || ""
  }
} satisfies Config;