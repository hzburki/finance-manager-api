import Elysia, { t } from "elysia";

/** Custom Imports */
import databaseConfig from "../../config/database.config";

/** Importing Handlers & DTOs */
import { registerWithEmailAndPassword } from "./auth.handler";
import { registerWithEmailAndPasswordDTO } from "./auth.dto";

const authRoutes = new Elysia({ prefix: '/auth' })
  /** Injecting Database Connection */
  .use(databaseConfig)
  /** Register User with Email and Password */
  .post('/register', registerWithEmailAndPassword, registerWithEmailAndPasswordDTO)

export type authRoutesType = typeof authRoutes
export { authRoutes }