import { signupUser } from "@/server/controllers/AuthController";
import handler from "@/utils/Handle";

const hand = handler.post(signupUser);

export default hand;
