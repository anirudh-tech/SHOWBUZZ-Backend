import mongoose, { Schema, model } from "mongoose";

const chatSchema: Schema<any> = new Schema(
  {
    participants: [{ type: Schema.Types.ObjectId, ref: "user" }],
    groupName: {
      type: String,
    },
    groupAdmin: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: "message",
    }
  },
  {
    timestamps: true,
  }
);

export const Chat = model("chat", chatSchema);
