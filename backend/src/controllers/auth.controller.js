import bcrypt from "bcrypt";
import { cookiesOptions } from "../config/config.js";
import { createUser, findUserByEmail } from "../dao/user.dao.js";
import User from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { createJWT } from "../utils/JWT.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user || !password) {
    return res
      .status(401)
      .json({ message: "Invalid credentials - User Not Found" });
  }
  const passwordMatches = await comparePassword(password, user.password);
  if (!passwordMatches) {
    return res
      .status(401)
      .json({ message: "Invalid credentials - Password Incorrect" });
  }
  const token = createJWT({ userId: user._id });
  res.cookie("token", token, cookiesOptions);
  res.status(200).json({ user, message: "Login Successfull", token });
};

export const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    return res
      .status(401)
      .json({ message: "Invalid credentials - User already exists" });
  }
  const hashedPassword = await hashPassword(password);
  const newUser = await createUser(email, hashedPassword);
  const token = createJWT({ userid: newUser._id });
  res.cookie("token", token, cookiesOptions);
  res.json({ message: "User Created Successfully", user: newUser, token });
};
