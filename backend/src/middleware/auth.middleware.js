import { findUserById } from "../dao/user.dao.js";
import { verifyJWT } from "../utils/JWT.js";

export const authMiddleware = async (req, res, next) => {
  // Check if the user is authenticated
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const descodedToken = verifyJWT(token, process.env.JWT_SECRET);
    const userId = descodedToken.userId;
    const user = await findUserById(userId);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
