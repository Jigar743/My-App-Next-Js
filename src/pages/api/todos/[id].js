import {
  deleteTodoById,
  getTodoById,
  updateTodoById,
} from "@/server/controllers/TodosController";
import { protectedHandler } from "@/utils/Handle";

const handler = protectedHandler
  .get(getTodoById)
  .put(updateTodoById)
  .delete(deleteTodoById);

export default handler;
