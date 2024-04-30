import { MovieEntity } from "../../domain/entities/movieEntity";
import { IDependencies } from "../interfaces/IDependencies";

export const editTheatreMovieUseCase = (dependencies: IDependencies) => {
  const {repositories: {editTheatreMovie}} = dependencies

  return {
    execute: async(movieData: MovieEntity) => {
      try {
        return await editTheatreMovie(movieData)
      } catch (error: any) {
        throw new Error(error.message)
      }
    } 
  }
};
