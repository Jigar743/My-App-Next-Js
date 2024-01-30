import { loginUser } from "@/server/controllers/AuthController";
import handler from "@/utils/Handle";

handler.post(loginUser);

export default handler;
