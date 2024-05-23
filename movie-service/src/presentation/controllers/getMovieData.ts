import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { OttMovie } from "../../infrastructure/database/mongoDB/models/ottMovie";

export const getMovieDataController = (dependencies: IDependencies) => {
  const {useCases: {getAllMoviesUseCase}} = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {id} = req.params;
      const data = await OttMovie.findById(id)
      res.status(200).json({
        success: true,
        data,
        message: "Movie data retrieved successfully",
      })
    } catch (error) {
      next(error)
    }
  }
}