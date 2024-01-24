// This file is for fetching all the users
import { verifyToken } from "../../../Controllers/MiddlewareController";
import { getAllUsers } from "../../../Controllers/UserControllers";
import { protectedHandler } from "../../../utils/Handle";

protectedHandler.use(verifyToken).get(getAllUsers);

export default protectedHandler;
