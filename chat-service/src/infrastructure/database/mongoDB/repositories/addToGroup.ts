import { Chat } from "../models/chatModel";

export const addToGroup = async({ chatId, userId }: any) => {
  try {
    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      {
        $addToSet: { participants: userId },
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
