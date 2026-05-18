import {
  deleteURLFromDB,
  getAllUrls,
  getFullUrl,
} from "../dao/shortUrl.dao.js";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res) => {
  const { fullUrl } = req.body;
  const shortUrl = await createShortUrlWithoutUser(fullUrl);
  res.json({ shortUrl });
};
export const createCustomUrl = async (req, res) => {
  const user = req.user;
  const { fullUrl, slug } = req.body;
  const shortUrl = await createShortUrlWithoutUser(fullUrl, slug, user._id);
  if (!shortUrl)
    return res.status(400).json({
      message: "Custom slug already exists. Please choose a different one.",
    });
  res.json({ shortUrl });
};
export const redirectFromShortUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const fullUrl = await getFullUrl(shortUrl);
  if (fullUrl) {
    res.redirect(fullUrl);
  }
};

export const allUrls = async (req, res) => {
  const urls = await getAllUrls();
  res.json({ urls: urls });
};

export const deleteUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const urls = await deleteURLFromDB(shortUrl);
  res.json({ deletedUrl: urls });
};
