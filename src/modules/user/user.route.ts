import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertDataToDb);
router.post("/profile", userController.updateAndCreate);

export const userRoutes = router;
