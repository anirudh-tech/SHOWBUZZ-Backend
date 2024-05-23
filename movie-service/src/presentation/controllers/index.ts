import { IDependencies } from "../../application/interfaces/IDependencies";
import { addOttMovieController } from "./addOttMovie";
import { addTheatreMovieController } from "./addTheatreMovie";
import { deleteMovieController } from "./deleteMovie";
import { editTheatreMovieController } from "./editTheatreMovie";
import { findMovieController } from "./findMovie";
import { getAllMoviesController } from "./getAllMovies";
import { getAllOttMoviesController } from "./getAllOttMovies";
import { getMovieDataController } from "./getMovieData";
import { getTheatreMoviesController } from "./getTheatreMovies";
import { listOttMoviesController } from "./listOttMovies";

export const controllers = (dependencies: IDependencies) => {
  return {
    addTheatreMovie: addTheatreMovieController(dependencies),
    getTheatreMovies: getTheatreMoviesController(dependencies),
    findMovie: findMovieController(dependencies),
    editTheatreMovie: editTheatreMovieController(dependencies),
    deleteMovie: deleteMovieController(dependencies),
    getAllMovies: getAllMoviesController(dependencies),
    addOttMovie: addOttMovieController(dependencies),
    getAllOttMovies: getAllOttMoviesController(dependencies),
    getMovieData: getMovieDataController(dependencies),
    listOttMovies: listOttMoviesController(dependencies)
  };
};
