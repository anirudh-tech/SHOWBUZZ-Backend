import { MovieEntity } from "../../../../domain/entities/movieEntity";
import { OttMovie } from "../models/ottMovie";

export const addOttMovie = async (data: MovieEntity) => {
  try {
    const movie: MovieEntity | null = await OttMovie.create(data);
    const movies = await OttMovie.find({})
    return movies;
  } catch (error: any) {
    throw new Error(error.message)
  }
}