import { deleteUserById, updateUserById } from "@/server/controllers/UserControllers";
import { protectedHandler } from "@/utils/Handle";

protectedHandler.put(updateUserById).delete(deleteUserById);

export default protectedHandler;
