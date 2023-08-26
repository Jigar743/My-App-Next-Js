import { signupUser } from "../../../Controllers/AuthController";
import handler from "../../../utils/Handle";

handler.post(signupUser);

export default handler;
