import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { rateLimit } from "elysia-rate-limit";

/** Import Local Plugin */
import databasePlugin from "./config/database.config";

/** Import Routes */
import { authRoutes } from "./routes";

const app = new Elysia()

/** Midlewares */
app.use(cors())
// only run rate limiter in production
Bun.env.NODE_ENV === 'production' && app.use(rateLimit())
app.use(swagger())

/** Injecting Plugins */
app.use(databasePlugin)

/** Route Plugins */
app.use(authRoutes)

/** Index route */
app.get('/', () => 'Hello World!')

/** Start the server */
app.listen(Bun.env.PORT || 3000, ({ hostname, port }) => {
  console.log(`🦊 Elysia is running at ${hostname}:${port}`)
});
