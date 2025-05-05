import { getTodosByUser } from "@/server/controllers/TodosController";
import { protectedHandler } from "@/utils/Handle";

const handler = protectedHandler.get(getTodosByUser);

export default handler;
