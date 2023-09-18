import Elysia, { t } from "elysia";

/** Custom Imports */
import { hashPassword, verifyPassword } from "./utils/auth.utils";
import databaseConfig from "./config/database.config";

/** Importing Schema */
import Schema from "./schema"
const { users } = Schema

const authRoutes = new Elysia({ prefix: '/auth' })
  /** Injecting Database Connection */
  .use(databaseConfig)
  /** ========================================
   * Register User with Email and Password
   * ========================================
   */
  .post('/register', async ({ set, body, db }) => {
    const { email, password } = body

    /** Check for duplicate emails and return error message */
    const emailExists = await db().query.users.findFirst({
      columns: { id: true },
      where: (users, { eq }) => eq(users.email, email)
    });

    if (emailExists) { 
      set.status = 400
      return "email already exists" 
    }

    const hashedPassword = await hashPassword(password) 

    // Creating a new record in the users table.
    try {
      await db().insert(users).values({ email, password: hashedPassword })
    } catch (error: any) {
      set.status = 500
      return error.message
    }

    return "resource created successfully"
  }, {
    body: t.Object({
      email: t.String({ format: 'email' }),
      password: t.String({ minLength: 6 }),
    })
  })
  /**
   * ========================================
   * Login User with Email and Password
   * ========================================
   */
  .post('/login', async ({ body, set, db }) => {
    const { email, password } = body

    // Check if user with email is present and the record is active
    const user = await db()
      .query.users.findFirst({
        columns: {
          id: true,
          email: true,
          status: true,
          password: true,
        },
        where: (users, { and, eq }) => and(
          eq(users.email, email),
          eq(users.status, 'active')
        )
      })

    // Auth Failed because email does not exists
    if (!user) {
      set.status = 401
      return "invalid credentials"
    }

    // Check if password is correct
    const doesPasswordMatch = await verifyPassword(password, user.password)

    // Auth Failed because password is incorrect
    if (!doesPasswordMatch) {
      set.status = 401
      return "invalid credentials"
    }

    return user
  }, {
    body: t.Object({
      email: t.String({ format: 'email' }),
      password: t.String({ minLength: 6 }),
    })
  })
  .post('/forget-password', () => {
    return "Forget Password"
  })
  .post('/reset-password', () => {
    return "Reset Password"
  });

export { authRoutes }