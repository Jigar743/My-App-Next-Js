import { getTodosOfUser } from "@/server/controllers/TodosController";
import { protectedHandler } from "@/utils/Handle";

protectedHandler.get(getTodosOfUser);

export default protectedHandler;
