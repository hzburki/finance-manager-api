import { t } from "elysia"

export const registerWithEmailAndPasswordDTO = {
  body: t.Object({
    email: t.String({ format: 'email' }),
    password: t.String({ minLength: 6 }),
  })
}