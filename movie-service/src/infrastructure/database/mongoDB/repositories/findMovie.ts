import { MovieEntity } from "../../../../domain/entities/movieEntity";
import { Movie } from "../models/movie";

export const findMovie = async (id: string) => {
  try {
    const movie: MovieEntity | null = await Movie.findById(id);
    return movie as MovieEntity;
  } catch (error:any) {
    throw new Error(error?.message);
  }
}