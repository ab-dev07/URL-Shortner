import { deleteURLFromDB, getAllUrls, getFullUrl } from "../dao/shortUrl.dao.js";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res) => {
  console.log(req.body);
  const { fullUrl } = req.body;
  const shortUrl = await createShortUrlWithoutUser(fullUrl);
  res.json({ shortUrl });
};
export const createCustomUrl = async (req, res) => {
  console.log(req.body);
  const { fullUrl, slug } = req.body;
  const shortUrl = await createShortUrlWithoutUser(fullUrl, slug);
  res.json({ shortUrl });
};
export const redirectFromShortUrl = async (req, res) => {
  const { shortUrl } = req.params;
  console.log("time", shortUrl);
  const fullUrl = await getFullUrl(shortUrl);
  console.log("fullUrl:", fullUrl);
  if (fullUrl) {
    console.log("redirecting....");
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
