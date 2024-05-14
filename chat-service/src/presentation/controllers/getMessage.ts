import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const getMessageController = (dependencies: IDependencies) => {
  const {useCases: {getMessageUseCase}} = dependencies;
  return async (req:Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id
      const message = await getMessageUseCase(dependencies).execute(id)
      console.log("🚀 ~ file: getMessage.ts:9 ~ return ~ id:", id)

      res.status(200).json({
        success: true,
        data: message,
        message: "message fetched!",
        })
    } catch (error) {
      next(error)
    }
  }
}