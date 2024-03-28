import { NextFunction, Request, Response } from "express"
import { dependencies } from "../../config/dependencies"
import { MovieEntity } from "../../domain/entities/movieEntity"
import { IDependencies } from "../../application/interfaces/IDependencies"
import { verifyToken } from "../../utils/jwt/verifyToken"
import { movieCreatedProducer } from "../../infrastructure/kafka/producers/movieCreatedProducer"

export const addTheatreMovieController = (dependencies: IDependencies) => {
  const {useCases: {addTheatreMovieUseCase}} = dependencies
  return async (req: Request, res:Response, next: NextFunction) => {
    try {
      const data = req.body
      console.log(req.cookies.user_jwt,"---------jwt")
      const token = req.cookies.user_jwt
      const decodedValue: any =  verifyToken(token)
      console.log(decodedValue,"=======")
      if(decodedValue.role === 'admin') {
        const movie: MovieEntity | null = await addTheatreMovieUseCase(dependencies).execute(data)
        movieCreatedProducer(movie)
        res.status(200).json({
          success: true,
          movie: movie,
          messages: "Movie Added!",
        })
      } else {
        res.status(401).json({
          success: false,
          messages: "Cannot add movies"
        })
      }
    } catch (error: any) {
      next(error);
    }
  }
}