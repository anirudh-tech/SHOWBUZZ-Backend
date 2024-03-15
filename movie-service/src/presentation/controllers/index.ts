import { IDependencies } from "../../application/interfaces/IDependencies";
import { addTheatreMovieController } from "./addTheatreMovie";
import { getTheatreMoviesController } from "./getTheatreMovies";


export const controllers = (dependencies: IDependencies) => {
  return {
      addTheatreMovie: addTheatreMovieController(dependencies),
      getTheatreMovies: getTheatreMoviesController(dependencies)
  }
}