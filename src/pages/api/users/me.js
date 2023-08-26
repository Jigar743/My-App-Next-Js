import { getCurrentUser } from "../../../Controllers/UserControllers";
import handler from "../../../utils/Handle";

handler.get(getCurrentUser);

export default handler;
