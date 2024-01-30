import User from "@/server/models/UsersModal";
import jwt from "jsonwebtoken";

export const decodeUser = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
    const user = await User.findById({ _id: decoded._id });

    return user;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
