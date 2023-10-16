import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertDataToDb);
router.post("/profile", userController.updateAndCreate);
router.get("/users", userController.getUsers);
router.get("/:id", userController.getSingleUser);

export const userRoutes = router;
