import { getAllTodos } from "../../../Controllers/TodosController";
import { protectedHandler } from "../../../utils/Handle";

protectedHandler.get(getAllTodos);

export default protectedHandler;
