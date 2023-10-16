import { Request, Response } from "express";
import { userService } from "./user.service";

const insertDataToDb = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertDataToDb(req.body);
    res.send({
      success: true,
      message: "user create successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const userController = {
  insertDataToDb,
};
