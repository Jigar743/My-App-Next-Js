import User from "../Models/UsersModal";
import jwt from "jsonwebtoken";


const getCurrentUser = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(403).json({ message: "UnAuthorised User!" });
  } else {
    jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, async (err, tmp) => {
      if (err) {
        res.status(403).json({ message: "UnAuthorized User!" });
      }
      await User.findById({ _id: tmp._id })
        .then((user) => {
          if (user) {
            res.status(200).json({ user });
          }
        })
        .catch((err) =>
          res.status(403).json({ message: "UnAuthorized User!" })
        );
    });
  }
};

const getAllUsers = async (req, res) => {
  await User.find({})
    .then((allUsers) => {
      res.status(200).json({ allUsers });
    })
    .catch((e) => {
      res.status(404).json({ message: "please try again later!" });
    });
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
