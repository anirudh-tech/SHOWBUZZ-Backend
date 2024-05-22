import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  chatId: { type: Schema.Types.ObjectId, ref: 'chat', required: true },
  sender: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  content: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
  readBy: [{ type: Schema.Types.ObjectId, ref: 'user' }],
},
{
  timestamps: true,
});

export const Message = model('message', MessageSchema);