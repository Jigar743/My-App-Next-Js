import { loginUser } from "../../../Controllers/AuthController";
import handler from "../../../utils/Handle";

handler.post(loginUser);

export default handler;
