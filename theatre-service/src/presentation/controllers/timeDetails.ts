import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const timeDetailsController = (dependencies: IDependencies) => {
  const {useCases: {timeDetailsUseCase}} = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {timeId} = req.params
      console.log("🚀 ~ return ~ timeId:", timeId)
      const response = await  timeDetailsUseCase(dependencies).execute(timeId);
      res.status(200).json({
        success: true,
        data: response,
        message: 'Time fetched'
      })
    } catch (error) {
      next(error)
    }
  }
}