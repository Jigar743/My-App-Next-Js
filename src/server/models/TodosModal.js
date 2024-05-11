import mongoose from "mongoose";

const todoScheema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "in progress"],
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "high", "medium"],
      required: true,
    },
    dueDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    completionDate: {
      type: Date,
      default: null,
    },
    attachments: [
      {
        name: String,
        type: String,
      },
    ],
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todoTags",
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true, versionKey: false }
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
