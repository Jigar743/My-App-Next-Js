import { getCurrentUser } from "@/server/controllers/UserControllers";
import handler from "@/utils/Handle";

handler.get(getCurrentUser);

export default handler;
