import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies"
import { Movie } from "../../infrastructure/database/mongoDB/models/movie"

export const deleteMovieController = (dependencies: IDependencies) => {
  return async (req:Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id
      const status = req.body.newStatus

      const response = await Movie.findByIdAndUpdate(id,{status}, {new:true})
      res.status(200).json({
        success: true,
        data: response,
        message: 'Movie Blocked succesfully'
      })
    } catch (error: any) {
      
    }
  }
}