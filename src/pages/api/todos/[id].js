import {
  deleteTodoById,
  updateTodoById,
} from "@/server/controllers/TodosController";
import { protectedHandler } from "@/utils/Handle";

protectedHandler.put(updateTodoById).delete(deleteTodoById);

export default protectedHandler;
