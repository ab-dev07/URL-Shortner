import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./src/config/db.js";
import shortUrlRoutes from "./src/routes/shortUrl.route.js";
import authRoutes from "./src/routes/auth.route.js";
import { redirectFromShortUrl } from "./src/controllers/shortUrl.controller.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/:shortUrl", redirectFromShortUrl);
app.use("/api/auth", authRoutes);
app.use("/api/shortUrl", shortUrlRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

connectDB().then(
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }),
);
