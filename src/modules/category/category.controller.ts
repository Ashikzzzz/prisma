import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.createCategory(req.body);
    res.send({
      success: true,
      message: "category create successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const categoryController = {
  createCategory,
};
