import Elysia from "elysia";

const authRoutes = new Elysia({ prefix: '/auth' })
  .get('/login', () => "Hello from login route")
  .get('/register', () => "Hello from register route")

export { authRoutes }