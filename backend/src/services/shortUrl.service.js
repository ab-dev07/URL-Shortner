import { findUrl, saveShortUrl } from "../dao/shortUrl.dao.js";
import ShortUrl from "../models/shortUrl.model.js";
import { generteNanoId } from "../utils/generteNanoId.js";

export const createShortUrlWithoutUser = async (
  fullUrl,
  slug = null,
  userId = null,
) => {
  const id = slug || generteNanoId();
  const shortUrl = `${process.env.HOST}${id}`;
  const existingUrl = await findUrl(id);
  if (existingUrl) return false;

  slug
    ? await saveShortUrl({ fullUrl, shortUrl: id, userId, custom: true })
    : await saveShortUrl({ fullUrl, shortUrl: id, userId });

  return shortUrl;
};
