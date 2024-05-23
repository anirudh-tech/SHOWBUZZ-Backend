import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const addOttMovieController = (dependencies: IDependencies) => {
  const {
    useCases: { addOttMovieUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const movie = await addOttMovieUseCase(dependencies).execute(data);
      res.status(200).json({
        success: true,
        movie: movie,
        messages: "Ott Movie Added!",
      });
    } catch (error) {
      next(error);
    }
  };
};
