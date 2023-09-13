import Elysia from "elysia";

const authRoutes = new Elysia({ prefix: '/auth' })
  .get('/login', (context) => {
    return JSON.stringify(context.params, null, 2)
  })
  .get('/register', (context) => "Hello from register route")

export { authRoutes }