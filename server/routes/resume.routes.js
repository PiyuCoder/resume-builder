import express from "express";
import { uploadResume } from "../controllers/uploadResume.controllers.js";
import { authenticator } from "../middlewares/authenticator.js";
import {
  deleteResume,
  updateResume,
} from "../controllers/updateResume.controlers.js";

const router = express.Router();

router.post("/upload", authenticator, uploadResume);

router.put("/update", authenticator, updateResume);

router.delete("/delete/:id", authenticator, deleteResume);

// router.post("/login", login);

export default router;
