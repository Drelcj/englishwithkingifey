import { prisma } from "@/prisma/prisma";

export const getAccountByUserId = async (userId: string) => {
  try {
    return await prisma.account.findFirst({
      where: { userId },
    });
  } catch (error) {
    console.error("Error fetching account:", error);
    return null;
  }
};