import { getAllTodos } from "@/server/controllers/TodosController";
import { protectedHandler } from "@/utils/Handle";

protectedHandler.get(getAllTodos);

export default protectedHandler;
