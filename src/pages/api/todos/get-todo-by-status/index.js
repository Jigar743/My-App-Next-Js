import { protectedHandler } from "@/utils/Handle";
import { todosByStatus } from "@/server/controllers/TodosController";

const handler = protectedHandler.get(todosByStatus);

export default handler;
