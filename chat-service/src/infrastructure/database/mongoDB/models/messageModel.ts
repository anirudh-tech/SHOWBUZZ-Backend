import mongoose, { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  conversationId: { type: Schema.Types.ObjectId, ref: 'conversation', required: true },
  sender: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  content: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
  readBy: [{ type: Schema.Types.ObjectId, ref: 'users' }],
},
{
  timestamps: true,
});

export const Message = model('message', MessageSchema);