import jwt from "jsonwebtoken";

const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET;

export const generateToken = (user) => {
  const u = {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
  };
  const token = jwt.sign(u, secretKey, {
    expiresIn: "30m", // expires in 15 minute
  });

  return token;
};

export const generateRefreshToken = (user) => {
  const u = {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
  };
  const token = jwt.sign(u, secretKey, {
    expiresIn: "7d", // expires after 7 days
  });

  return token;
};
