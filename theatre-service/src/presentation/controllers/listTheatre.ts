import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies";

export const listTheatresController = (dependencies: IDependencies) => {
  const {useCases: {listTheatresUseCase}} = dependencies;
  

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      console.log(id,'at controller--------------------------')
      const date = req.params.date
      const theatres = await listTheatresUseCase(dependencies).execute(id, date);
      res.status(200).json({
        success: true,
        data: theatres,
        messages: "theatres fetched!",
      });
    } catch (error: any) {
      next(error);
    }
  }
}