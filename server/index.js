import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { connectDb } from "./db.js";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";

dotenv.config();
connectDb();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/", express.static("build"));

app.use("/api", userRouter);

app.use("/api", resumeRouter);

app.get("/*", (req, res) => {
  res.sendFile(join(__dirname, "./build", "index.html"));
  console.log("this is being called");
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port: ${process.env.PORT}`)
);
