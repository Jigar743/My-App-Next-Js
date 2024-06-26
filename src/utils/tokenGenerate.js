import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const u = {
    name: user.name,
    email: user.email,
    password: user.password,
    _id: user._id.toString(),
  };
  const token = jwt.sign(
    u,
    process.env.NEXT_PUBLIC_JWT_SECRET,
    { algorithm: "HS256" },
    {
      expiresIn: 60 * 60 * 24, // expires in 24 hours
    }
  );

  return token;
};
