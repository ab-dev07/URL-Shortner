export const isValidUrl = (s) => {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

export const isValidAlias = (s) => /^[a-zA-Z0-9_-]{2,30}$/.test(s);
