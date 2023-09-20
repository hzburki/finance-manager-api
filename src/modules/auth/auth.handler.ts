/** Importing Schema */
import { type Context } from "elysia"

import Schema from "../../schema"
import { hashPassword } from "../../utils/auth.utils"

/** Destructuring Schema */
const { users } = Schema

// import { dbType } from "../../config/database.config"
// type registerType = Context & dbType & {
//   body: {
//     email: string
//     password: string
//   }
// }

export const registerWithEmailAndPassword = async (context: Context): Promise<string>  => {
  const { set, body: { email, password }, db } = context

  /** Check for duplicate emails and return error message */
  const emailExists = await db().query.users.findFirst({
    columns: { id: true },
    where: (users, { and, eq, isNull }) => and(
      eq(users.email, email),
      isNull(users.deletedAt)
    )
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
}