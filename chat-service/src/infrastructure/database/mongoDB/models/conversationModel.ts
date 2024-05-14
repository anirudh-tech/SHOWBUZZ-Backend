import mongoose, { Schema, model } from "mongoose";

const conversationSchema: Schema<any> = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  groupName: {
    type: String
  }
},
{
  timestamps: true,
});

export const Conversation = model("conversation", conversationSchema)