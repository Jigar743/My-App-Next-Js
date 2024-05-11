import mongoose from "mongoose";

const todoTags = new mongoose.Schema(
  {
    todoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "todos",
    },
    tagId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tags",
    },
  },
  { versionKey: false }
);

const TodoTags =
  (mongoose.models && mongoose.models.todoTags) ||
  mongoose.model("todoTags", todoTags);

export default TodoTags;
