import { decodeUser } from "@/utils/decodeUser";

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(403).json({ message: "Unauthorised User!" });
  } else {
    try {
      const user = await decodeUser(token);

      if (user) {
        req.user = user;
        next();
      }
    } catch (error) {
      res.status(403).json({ message: "UnAuthorized User!" });
    }
  }
};

export { verifyToken };
