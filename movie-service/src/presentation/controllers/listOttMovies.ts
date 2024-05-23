import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { MovieEntity } from "../../domain/entities/movieEntity";
import { OttMovie } from "../../infrastructure/database/mongoDB/models/ottMovie";

export const listOttMoviesController = (dependencies: IDependencies) => {

  return async (req: Request, res:Response, next: NextFunction) => {
    console.log("reached here")
    try {
      const movies: MovieEntity[] | null = await OttMovie.find()
      res.status(200).json({
        success: true,
        data: movies,
        message: "movies  fetched!",
        })
    } catch (error) {
      next(error);
    }
  }
}