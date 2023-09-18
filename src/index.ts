import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { rateLimit } from "elysia-rate-limit";

/** Import Routes */
import { authRoutes } from "./routes";
 
const app = new Elysia()
  /** Middleware */
  .use(cors())
  .use(rateLimit())
  .use(swagger())
  /* Routes */
  .use(authRoutes)
  /** Home Route */
  .get('/', () => "Hello padawan, welcome to the API");

/** Start the server */
app.listen(process.env.PORT || 3000, ({ hostname, port }) => {
  console.log(`🦊 Elysia is running at ${hostname}:${port}`)
});
