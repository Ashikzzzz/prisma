import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const getAllUsers = await prisma.user.findMany();
  //   console.log("getAllUsers", getAllUsers);
  //   const createUser = await prisma.user.create({
  //     data: {
  //       email: "ashik@gmail.com",
  //       name: "ashik",
  //       age: 34,
  //     },
  //   });
  //   console.log("createUser", createUser);
}
main();
