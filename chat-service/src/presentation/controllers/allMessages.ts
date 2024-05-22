import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Message } from "../../infrastructure/database/mongoDB/models/messageModel";

export const allMessagesController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { chatId } = req.params;
      console.log("🚀 ~ file: allMessages.ts:9 ~ return ~ chatId:", chatId)
      const data = await Message.find({ chatId })
        // .populate("sender")
        .populate("chatId");

      res.status(200).json({
        success: true,
        data,
        message: "messages fetched!",
      });
    } catch (error) {
      next(error);
    }
  };
};
