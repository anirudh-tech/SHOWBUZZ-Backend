import { IDependencies } from "../../application/interfaces/IDependencies";
import { addTheatreMovieController } from "./addTheatreMovie";
import { deleteMovieController } from "./deleteMovie";
import { editTheatreMovieController } from "./editTheatreMovie";
import { findMovieController } from "./findMovie";
import { getAllMoviesController } from "./getAllMovies";
import { getTheatreMoviesController } from "./getTheatreMovies";


export const controllers = (dependencies: IDependencies) => {
  return {
      addTheatreMovie: addTheatreMovieController(dependencies),
      getTheatreMovies: getTheatreMoviesController(dependencies),
      findMovie: findMovieController(dependencies),
      editTheatreMovie: editTheatreMovieController(dependencies),
      deleteMovie: deleteMovieController(dependencies),
      getAllMovies: getAllMoviesController(dependencies)
  }
}