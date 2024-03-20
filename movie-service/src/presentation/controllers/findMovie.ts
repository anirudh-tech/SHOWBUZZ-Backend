import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const findMovieController = (dependencies: IDependencies) => {
  const {useCases: {findMovieUseCase}} = dependencies;
  return async (req: Request, res:Response, next: NextFunction) => {
    try {
      const {id} = req.params
      console.log(id,'-----id')
      const movie = await findMovieUseCase(dependencies).execute(id)
      res.status(200).json({
        success: true,
        data: [movie],
        messages: "Movie fetched!",
      })
    } catch (error: any) {
      next(error);
    }
  }
}