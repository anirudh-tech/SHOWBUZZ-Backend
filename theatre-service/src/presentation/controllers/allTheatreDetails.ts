import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Theatre } from "../../infrastructure/database/mongoDB/models/theatreModel";

export const allTheatreDetailsController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const theatres = await Theatre.find()
      res.status(200).json({
        success: true,
        data: theatres,
        messages: "theatres fetched!",
      });
    } catch (error) {
      next(error)
    }
  }
}