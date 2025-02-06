import { prisma } from "@/prisma/prisma";
export const getUserByEmail = async (email: string | undefined) => {
  if (!email) return null;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch {
    return null;
  }
};