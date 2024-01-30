// This file is for fetching all the users
import { verifyToken } from "@/server/controllers/MiddlewareController";
import { getAllUsers } from "@/server/controllers/UserControllers";
import { protectedHandler } from "@/utils/Handle";

protectedHandler.use(verifyToken).get(getAllUsers);

export default protectedHandler;
