import { MovieEntity } from "../../domain/entities/movieEntity";
import { IDependencies } from "../interfaces/IDependencies";

export const addOttMovieUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { addOttMovie },
  } = dependencies;
  return {
    execute: async (data: MovieEntity) => {
      try {
        return await addOttMovie(data);
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  };
};
