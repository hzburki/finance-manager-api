import Elysia from "elysia";

/** Import Local Plugin */
// import databaseConfig from "./config/database.config";

const authRoutes = new Elysia({ prefix: '/auth' })
  // .use(databaseConfig)
  .get('/login', async () => {
    return 'login'
  });

export { authRoutes }