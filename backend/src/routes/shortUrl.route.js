import express from "express";
import {
  allUrls,
  createCustomUrl,
  createShortUrl,
  deleteUrl,
  redirectFromShortUrl,
} from "../controllers/shortUrl.controller.js";
const router = express.Router();
router.delete("/:shortUrl", deleteUrl);
router.get("/all", allUrls);
router.post("/custom", createCustomUrl);
router.post("/", createShortUrl);

export default router;
