export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await Bun.password.hash(password)
  return hashedPassword;
}

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  const isMatch = await Bun.password.verify(password, hash);
  return isMatch;
}

// Todo: complete this
export const verifyToken = async (token: string): Promise<boolean> => {
  return true;
}