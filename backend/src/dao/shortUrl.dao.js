import ShortUrl from "../models/shortUrl.model.js";
import { generteNanoId } from "../utils/generteNanoId.js";

export const saveShortUrl = async ({
  fullUrl,
  shortUrl,
  userId,
  custom = false,
}) => {
  return await ShortUrl.create({
    fullUrl,
    shortUrl,
    userId,
    custom,
  });
};
export const getFullUrl = async (shortUrl) => {
  const urlData = await ShortUrl.findOneAndUpdate(
    { shortUrl },
    { $inc: { clicks: 1 } },
  );

  return urlData ? urlData.fullUrl : null;
};
export const findUrl = async (shortUrl) => {
  const urlData = await ShortUrl.findOne({ shortUrl });

  return urlData ? urlData.fullUrl : null;
};
export const getAllUrls = async () => {
  return await ShortUrl.find();
};
export const deleteURLFromDB = async (shortUrl) => {
  return await ShortUrl.findOneAndDelete({ shortUrl });
};
