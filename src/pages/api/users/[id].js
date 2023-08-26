import {
  deleteUserById,
  updateUserById,
} from "../../../Controllers/UserControllers";
import { protectedHandler } from "../../../utils/Handle";

protectedHandler.put(updateUserById).delete(deleteUserById);

export default protectedHandler;
