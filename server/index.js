import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./db.js";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);

app.use("/api", resumeRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port: ${process.env.PORT}`)
);
