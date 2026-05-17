import ShortUrl from "../models/shortUrl.model.js";
import { generteNanoId } from "../utils/generteNanoId.js";

export const saveShortUrl = async (fullUrl, shortUrl) => {
  return await ShortUrl.create({
    fullUrl,
    shortUrl,
  });
};
export const getFullUrl = async (shortUrl) => {
  console.log("time2", shortUrl);
  const urlData = await ShortUrl.findOneAndUpdate(
    { shortUrl },
    { $inc: { clicks: 1 } },
  );
  console.log("time3", urlData);

  return urlData ? urlData.fullUrl : null;
};
export const getAllUrls = async () => {
  return await ShortUrl.find();
};
export const deleteURLFromDB = async (shortUrl) => {
  return await ShortUrl.findOneAndDelete({ shortUrl });
};
