import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Account already exists!"],
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
    dateOfBirth: {
      type: Date,
      default: Date.now,
    },
    phoneNumber: {
      type: String,
      default: "000-000-0000",
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
      default: "others",
    },
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todos",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;

        return ret;
      },
    },
  }
);

const User =
  (mongoose.models && mongoose.models.users) ||
  mongoose.model("users", userSchema);

// if (mongoose.models && mongoose.models.users) {
//   User = mongoose.models.users;
// } else {
//   User = mongoose.model("users", userSchema);
// }

export default User;
