import { createTodo } from "../../../Controllers/TodosController";
import { protectedHandler } from "../../../utils/Handle";

protectedHandler.post(createTodo);

export default protectedHandler;
