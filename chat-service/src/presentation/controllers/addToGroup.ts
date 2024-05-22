import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/verifyToken";

export const addToGroupController = (dependencies: IDependencies) => {
  const {
    useCases: { addToGroupUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { chatId } = req.body;
      console.log("🚀 ~ file: addToGroup.ts:11 ~ return ~ chatId:", chatId);
      const encodedToken = req.cookies.user_jwt;
      const token: any = verifyToken(encodedToken);
      const userId = token._id;
      const data = await addToGroupUseCase(dependencies).execute({
        chatId,
        userId,
      });
      res.status(200).json({
        success: true,
        data,
        message: "user added to group !",
      });
    } catch (error) {
      next(error);
    }
  };
};
