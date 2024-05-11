import mongoose from "mongoose";

const tags = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todoTags",
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Tags =
  (mongoose.models && mongoose.models.tags) || mongoose.model("tags", tags);

export default Tags;
