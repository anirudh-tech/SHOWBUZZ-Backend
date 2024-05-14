import { Conversation } from "../models/conversationModel"

export const listGroups = async (id: string) => {
  try {
    const conversations = await Conversation.find({ participants: id });
    return conversations;
    
  } catch (error: any) {
    throw new Error(error.message)
  }
}