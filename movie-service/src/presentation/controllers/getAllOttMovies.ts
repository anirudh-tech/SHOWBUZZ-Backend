import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { OttMovie } from "../../infrastructure/database/mongoDB/models/ottMovie";

export const getAllOttMoviesController = (dependencies: IDependencies) => {
  const {
    useCases: { getAllMoviesUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = Number(req.query?.page) || 1;
      const limit = Number(req.query?.limit) || 5;
      const skip = (page - 1) * limit;
      const movies = await OttMovie.find().skip(skip).limit(limit);
      const totalDocuments = await OttMovie.countDocuments();
      const totalPage = Math.ceil(totalDocuments / limit);
      const data = {
        movies,
        totalPage,
      };
      res.status(200).json({
        success: true,
        data,
        message: "Movies retrieved successfully",
      });
    } catch (error) {
      next(error);
    }
  };
};
