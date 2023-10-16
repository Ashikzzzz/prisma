import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = process.env.PORT;
async function main() {
  app.listen(port, () => {
    console.log(`server is running ${port}`);
  });
}
main();
