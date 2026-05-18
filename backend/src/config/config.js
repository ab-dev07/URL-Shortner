export const cookiesOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Lax",
  maxAge: 60 * 60 * 1000, // 1 hour
};
