import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { rateLimit } from "elysia-rate-limit";

/**
 * Import Routes
 */
import { authRoutes } from "./routes";

const app = new Elysia()

/**
 * Midlewares
 */
app.use(cors())
// only run rate limiter in production
Bun.env.NODE_ENV === 'production' && app.use(rateLimit())
app.use(swagger())

/**
 * Route Plugins
 */
app.use(authRoutes)

// Index route
app.get('/', () => 'Hello World!')

app.listen(Bun.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
