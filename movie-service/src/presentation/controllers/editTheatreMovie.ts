import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { movieEditedProducer } from "../../infrastructure/kafka/producers/movieEditedProducer";

export const editTheatreMovieController = (dependencies: IDependencies) => {
  const {useCases: {editTheatreMovieUseCase}} = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movieData = req.body
      const response = await editTheatreMovieUseCase(dependencies).execute(movieData)
      movieEditedProducer(movieData)
      res.status(201).json({
        success: true,
        data: response,
        message: 'Movie edited successfully'
      })
    } catch (error) {
      next(error)
    }
  }
}