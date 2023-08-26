import mongoose from "mongoose";

const todoScheema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Todo =
  (mongoose.models && mongoose.models.todos) ||
  mongoose.model("todos", todoScheema);
// if (mongoose.models && mongoose.models.todos) {
//   Todo = mongoose.models.todos;
// } else {
//   Todo = mongoose.model("todos", todoScheema);
// }

export default Todo;
