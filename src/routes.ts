import Elysia from "elysia";
import databaseConfig from "./config/database.config";

const authRoutes = new Elysia({ prefix: '/auth' })
  .use(databaseConfig)
  .get('/login', async ({ db }) => {
    return db().query.users.findMany()
  });

export { authRoutes }