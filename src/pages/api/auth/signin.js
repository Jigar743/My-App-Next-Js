import { loginUser } from "@/server/controllers/AuthController";
import handler from "@/utils/Handle";

const hand = handler.post(loginUser);

export default hand;
