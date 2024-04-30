import { MovieEntity } from "../entities/movieEntity";

export interface IEditTheatreMovieUseCase {
  execute(movieData: MovieEntity): Promise<MovieEntity | null>
}