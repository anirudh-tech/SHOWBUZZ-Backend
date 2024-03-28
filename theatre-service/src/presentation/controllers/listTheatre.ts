import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies";

export const listTheatresController = (dependencies: IDependencies) => {
  const {useCases: {listTheatresUseCase}} = dependencies;
  

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const theatres = await listTheatresUseCase(dependencies).execute();
      res.status(200).json({
        success: true,
        data: theatres,
        messages: "Movie fetched!",
      });
    } catch (error: any) {
      next(error);
    }
  }
}