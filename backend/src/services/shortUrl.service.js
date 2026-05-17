import { saveShortUrl } from "../dao/shortUrl.dao.js";
import ShortUrl from "../models/shortUrl.model.js";
import { generteNanoId } from "../utils/generteNanoId.js";

export const createShortUrlWithoutUser = async (
  fullUrl,
  slug = null,
  userId = null,
) => {
  const id = slug || generteNanoId();
  const shortUrl = `${process.env.HOST}${id}`;
  await saveShortUrl(fullUrl, id);
  return shortUrl;
};
