import { Chat } from "../models/chatModel"

export const listGroups = async (id: string) => {
  try {
    const conversations = await Chat.find({ participants: id });
    return conversations;
    
  } catch (error: any) {
    throw new Error(error.message)
  }
}