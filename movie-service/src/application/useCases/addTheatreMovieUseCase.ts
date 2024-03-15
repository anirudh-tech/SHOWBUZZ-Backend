import { MovieEntity } from "../../domain/entities/movieEntity";
import { IDependencies } from "../interfaces/IDependencies";

export const addTheatreMovieUseCase = (dependencies: IDependencies) => {
  const {repositories: {addTheatreMovie} } = dependencies;

  return {
    execute: async (data: MovieEntity) => {
      try {
        return await addTheatreMovie(data)
      } catch (error:any) {
        throw new Error(error?.message)
      }
    }
  }
}