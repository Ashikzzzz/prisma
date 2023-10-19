import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/create-post", postController.createPost);
router.get("/", postController.getPosts);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export const postRoute = router;
