import { api } from "../config/axios";

export const createShortUrl = async (fullUrl) => {
  const res = await api.post("/create", { fullUrl });
  return res.data.shortUrl;
};
export const createCustomUrl = async (fullUrl, slug) => {
  const res = await api.post("/create/custom", { fullUrl, slug });
  return res.data.shortUrl;
};

export const deleteLink = async (fullUrl, slug) => {
  return "abc";
};
