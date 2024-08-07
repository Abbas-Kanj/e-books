import { Schema, model, models } from "mongoose";

const NotificationSchema = new Schema(
  {
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
    notifications: [NotificationSchema],
    role: {
      type: String,
      enum: ["user", "admin", "support"],
      required: true,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
