import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/*",
  out: "./src/migrations",
  driver: 'mysql2',
  dbCredentials: {
    host: process.env.DB_HOST || "",
    user: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "",
  }
} satisfies Config;