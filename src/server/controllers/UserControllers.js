import { decodeUser } from "@/utils/decodeUser";
import User from "../models/UsersModal";

const getCurrentUser = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(403).json({ message: "Unauthorised User!" });
  } else {
    try {
      const currentUser = await decodeUser(token);

      res.status(200).json({ user: currentUser });
    } catch (error) {
      console.log({ error });
      res.status(403).json({ message: "Unauthorized User!" });
    }
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    if (allUsers) {
      res.status(200).json({ allUsers });
    }
  } catch (error) {
    res.status(404).json({ message: "please try again later!" });
  }
};

const updateUserById = async (req, res) => {};

const deleteUserById = async (req, res) => {};

const getUserById = async (req, res) => {};

export {
  getCurrentUser,
  getAllUsers,
  updateUserById,
  deleteUserById,
  getUserById,
};
