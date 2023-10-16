import { PrismaClient, Profile, User } from "@prisma/client";
const prisma = new PrismaClient();

// insert a user data
const insertDataToDb = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

// update and create profile

const updateAndCreate = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }

  const result = await prisma.profile.create({
    data,
  });
  return result;
};

// get user data
const getUsers = async () => {
  const result = await prisma.user.findMany({});
  return result;
};

export const userService = {
  insertDataToDb,
  updateAndCreate,
  getUsers,
};
