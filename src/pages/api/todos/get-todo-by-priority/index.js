import { protectedHandler } from "@/utils/Handle";
import { todosByPriority } from "@/server/controllers/TodosController";

const handler = protectedHandler.get(todosByPriority);

export default handler;
