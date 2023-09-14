import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/*",
  out: "./src/migrations",
  driver: 'mysql2',
  dbCredentials: {
    connectionString: 'mysql://vhb8tvxn7035whezd7fs:pscale_pw_xXoCAktfaryEEhAaCokk6ZmpyCE6x2n49Y8EsjxPvPd@aws.connect.psdb.cloud/finance-manager?ssl={"rejectUnauthorized":true}'
  }
} satisfies Config;