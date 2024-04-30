import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies";

export const listTheatresController = (dependencies: IDependencies) => {
  const {useCases: {listTheatresUseCase}} = dependencies;
  

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id
      const date = req.params.date
      console.log(id,date,'at controller--------------------------')
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