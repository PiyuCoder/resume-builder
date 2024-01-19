import express from "express";
import { register } from "../controllers/register.controller.js";
import { login } from "../controllers/login.controller.js";
import { userData } from "../controllers/userData.controllers.js";
import { authenticator } from "../middlewares/authenticator.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/user", authenticator, userData);

export default router;
