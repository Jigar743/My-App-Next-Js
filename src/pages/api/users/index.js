// This file is for fetching all the users
import { getAllUsers } from "@/server/controllers/UserControllers";
import { protectedHandler } from "@/utils/Handle";

const handler = protectedHandler.get(getAllUsers);

export default handler;
