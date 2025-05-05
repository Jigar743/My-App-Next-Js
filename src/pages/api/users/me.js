import { getCurrentUser } from "@/server/controllers/UserControllers";
import handler from "@/utils/Handle";

const hand = handler.get(getCurrentUser);

export default hand;
