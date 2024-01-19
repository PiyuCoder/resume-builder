import mongoose from "mongoose";
import { Resume } from "./resume.models.js";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  resumes: [Resume.schema],
});

export const User = mongoose.model("User", userSchema);
