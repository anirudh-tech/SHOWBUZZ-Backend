import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/verifyToken";

export const sendMessageController = (dependencies: IDependencies) => {
  const {
    useCases: { sendMessageUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { content, chatId } = req.body;
      console.log("🚀 ~ file: sendMessage.ts:12 ~ return ~ content:", content)
      const encodedToken = req.cookies.user_jwt;
      const token: any = verifyToken(encodedToken);
      const userId = token._id;
      const data = await sendMessageUseCase(dependencies).execute({
        content,
        chatId,
        userId,
      });
      res.status(200).json({
        success: true,
        data,
        message: "message sent!",
      });
    } catch (error) {
      next(error);
    }
  };
};
