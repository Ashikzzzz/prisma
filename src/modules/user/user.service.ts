import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

const insertDataToDb = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

export const userService = {
  insertDataToDb,
};
