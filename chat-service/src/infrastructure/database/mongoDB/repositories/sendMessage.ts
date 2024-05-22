import { Chat } from "../models/chatModel";
import { Message } from "../models/messageModel";

export const sendMessage = async ({ content, chatId, userId }: any) => {
  try {
    const newMessage = {
      chatId,
      content,
      sender: userId,
    };

    const message = await Message.create(newMessage);
    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message,
    });

    const chats = await Message.find({chatId}).populate("chatId")

    const data = {
      message, 
      chats
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
