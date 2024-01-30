import { signupUser } from "@/server/controllers/AuthController";
import handler from "@/utils/Handle";

handler.post(signupUser);

export default handler;
