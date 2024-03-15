import { MovieEntity } from "../../../../domain/entities/movieEntity";
import { Movie } from "../models/movie"

export const getTheatreMovies = async() => {
  try {
    const movies = await Movie.find()
    return movies as MovieEntity[]
  } catch (error: any) {
    throw new Error(error?.message);
  }
}