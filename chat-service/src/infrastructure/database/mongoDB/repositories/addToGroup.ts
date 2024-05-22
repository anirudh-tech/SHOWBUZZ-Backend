import { Chat } from "../models/chatModel";

export const addToGroup = async({ chatId, userId }: any) => {
  try {
    const existingChat = await Chat.find({_id: chatId, participants: userId });
    if(existingChat) {
      throw new Error("Already added to group")
    }
    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      {
        $push: { participants: userId },
      },
      { new: true }
    );
    if(!updatedChat) {
      throw new Error("could not find the group");
    }
    const conversations = await Chat.find({ participants: userId });
    console.log("🚀 ~ file: addToGroup.ts:14 ~ addToGroup ~ conversations:", conversations)
    return conversations;
  } catch (error: any) {
    throw new Error(error.message)
  }
};
