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
app.use(databaseConfig)

/** Route Plugins */
app.use(authRoutes)

/** Index route */
app.get('/', ({ db }) => {
  return "Hello World"
})

/** Start the server */
app.listen(process.env.PORT || 3000, ({ hostname, port }) => {
  console.log(`🦊 Elysia is running at ${hostname}:${port}`)
});
