import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { MovieEntity } from "../../domain/entities/movieEntity";

export const getTheatreMoviesController = (dependencies: IDependencies) => {
  const {useCases: {getTheatreMoviesUseCase}} = dependencies;

  return async (req: Request, res:Response, next: NextFunction) => {
    console.log("reached here")
    try {
      const movies: MovieEntity[] | null = await getTheatreMoviesUseCase(dependencies).execute()
      res.status(200).json({
        success: true,
        data: movies,
        message: "movies  fetched!",
        })
    } catch (error) {
      
    }
  }
}