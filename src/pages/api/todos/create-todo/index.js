import { createTodo } from "@/server/controllers/TodosController";
import { protectedHandler } from "@/utils/Handle";

const handler = protectedHandler.post(createTodo);

export default handler;
