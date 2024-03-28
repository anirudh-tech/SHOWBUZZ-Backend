import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const theatreDetailsController = (dependencies: IDependencies) => {
  const {useCases: {theatreDetailsUseCase}} = dependencies

  return async ( req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      console.log(id,'id from controller')
      const theatre = await theatreDetailsUseCase(dependencies).execute(id);
      res.status(200).json({
        success: true,
        data: theatre,
        messages: "theatre fetched!",
      });
    } catch (error: any) {
      next(error);
    }
  }
}