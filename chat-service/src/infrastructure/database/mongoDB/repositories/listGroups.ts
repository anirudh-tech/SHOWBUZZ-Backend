import mongoose from "mongoose";
import { Chat } from "../models/chatModel"

export const listGroups = async (id: string) => {
  console.log("🚀 ~ file: listGroups.ts:5 ~ listGroups ~ id:", id)
  try {
    let conversations = await Chat.aggregate([
      // Match the documents with the given participant id
      { $match: { participants: new mongoose.Types.ObjectId(id) } },
      // Lookup to join the latestMessage details
      {
        $lookup: {
          from: 'messages', // the collection name of messages
          localField: 'latestMessage',
          foreignField: '_id',
          as: 'latestMessageDetails'
        }
      },
      // Unwind the latestMessageDetails array to treat it as a single object
      { $unwind: '$latestMessageDetails' },
      // Sort based on the latestMessageDetails.sentAt field
      { $sort: { 'latestMessageDetails.sentAt': -1 } },
      
    ]);

    
    let allConversations = await Chat.find({participants:{$in:[id]}})
    console.log("🚀 ~ file: listGroups.ts:28 ~ listGroups ~ allConversations:", allConversations)

    const conversationIds = conversations.map(convo => convo._id.toString());

    let data = allConversations.filter(convo => !conversationIds.includes(convo._id.toString()));
    console.log("🚀 ~ file: listGroups.ts:31 ~ listGroups ~ data:", data)

    const result = [conversations].concat(data)



    console.log("🚀 ~ file: listGroups.ts:6 ~ listGroups ~ conversations:", result)


    return result;
    
  } catch (error: any) {
    throw new Error(error.message)
  }
}