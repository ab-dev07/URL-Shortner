import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
  return User.findOne({ email: email });
  // Implement logic to find a user by email in the database
};
export const findUserById = async (id) => {
  return User.findById(id);
};

export const createUser = async (email, password) => {
  console.log("Create user:", email, password);
  // Implement logic to create a new user in the database
  return User.create({ email, password });
};
