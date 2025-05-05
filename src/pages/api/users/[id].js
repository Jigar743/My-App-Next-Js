import { deleteUserById, updateUserById } from "@/server/controllers/UserControllers";
import { protectedHandler } from "@/utils/Handle";

const handler = protectedHandler.put(updateUserById).delete(deleteUserById);

export default handler;
