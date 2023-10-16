import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

import { userRoutes } from "./modules/user/user.route";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
