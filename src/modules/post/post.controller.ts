import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.createPost(req.body);
    // console.log(result);
    res.send({
      success: true,
      message: "post create successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getPosts = async (req: Request, res: Response) => {
  try {
    const options = req.query;
    const result = await postService.getPosts(options);
    // console.log(result);
    res.send({
      success: true,
      message: " successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  createPost,
  getPosts,
};
