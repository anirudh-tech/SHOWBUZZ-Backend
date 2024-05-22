import { Chat } from "../models/chatModel";
import { Message } from "../models/messageModel";
import { User } from "../models/userModel"

export const createGroup = async ({id, groupName}: any) => {
  try {
    const newChat = new Chat({
      participants: [id], 
      groupName: groupName,
      groupAdmin: id,
    });

    const savedChat = await newChat.save();
    console.log("🚀 ~ file: createGroup.ts:12 ~ createGroup ~ savedConversation:", savedChat)

    return savedChat
    
  } catch (error:any) {
    throw new Error(error.message)
  }
}