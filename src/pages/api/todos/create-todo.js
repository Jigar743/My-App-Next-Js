import { createTodo } from "@/server/controllers/TodosController";
import { protectedHandler } from "@/utils/Handle";

protectedHandler.post(createTodo);

export default protectedHandler;
