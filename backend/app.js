import express from "express";
import connectDB from "./src/config/db.js";
const app = express();
import dotenv from "dotenv";
import e from "express";
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import shortUrlRoutes from "./src/routes/shortUrl.route.js";
import { redirectFromShortUrl } from "./src/controllers/shortUrl.controller.js";
import cors from "cors";

app.use(cors());
app.use("/api/create", shortUrlRoutes);

app.get("/:shortUrl", redirectFromShortUrl);

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDB().then(
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  }),
);
