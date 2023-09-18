import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { rateLimit } from "elysia-rate-limit";

/** Import Routes */
import { authRoutes } from "./routes";
import databaseConfig from "./config/database.config";

const app = new Elysia()

/** Midlewares */
app.use(cors())
// only run rate limiter in production
process.env.NODE_ENV === 'production' && app.use(rateLimit())
app.use(swagger())

/** Injecting Plugins */
app
  .use(databaseConfig)
  .use(authRoutes)
  .get('/', async ({ db }) => {
    const users = await db().query.users.findMany()
    return users
})

/** Start the server */
app.listen(process.env.PORT || 3000, ({ hostname, port }) => {
  console.log(`🦊 Elysia is running at ${hostname}:${port}`)
});
