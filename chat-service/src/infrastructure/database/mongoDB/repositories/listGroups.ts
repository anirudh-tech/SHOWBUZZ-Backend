import mongoose from "mongoose";
import { Chat } from "../models/chatModel"

export const listGroups = async (id: string) => {
  try {
    const conversations = await Chat.aggregate([
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


    console.log("🚀 ~ file: listGroups.ts:6 ~ listGroups ~ conversations:", conversations)


    return conversations;
    
  } catch (error: any) {
    throw new Error(error.message)
  }
}