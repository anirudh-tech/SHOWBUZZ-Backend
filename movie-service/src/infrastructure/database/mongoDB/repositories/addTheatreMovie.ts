import { MovieEntity } from "../../../../domain/entities/movieEntity";
import { Movie } from "../models/movie";

export const addTheatreMovie = async (data: MovieEntity) => {
  try {
    console.log(data,'data from repo');
    
    const movie: MovieEntity | null = await Movie.create(data);
    return movie as MovieEntity;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
