import { Conversation } from "../models/conversationModel";
import { Message } from "../models/messageModel";
import { User } from "../models/userModel"

export const createGroup = async ({id, groupName}: any) => {
  try {
    const newConversation = new Conversation({
      participants: [id], // Assuming the user who creates the group is a participant
      groupName: groupName,
    });

    const savedConversation = await newConversation.save();
    console.log("🚀 ~ file: createGroup.ts:12 ~ createGroup ~ savedConversation:", savedConversation)

    return savedConversation
    
  } catch (error:any) {
    throw new Error(error.message)
  }
}