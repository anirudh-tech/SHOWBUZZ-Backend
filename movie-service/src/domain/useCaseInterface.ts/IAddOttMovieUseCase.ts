import { MovieEntity } from "../entities/movieEntity";

export interface IAddOttMovieUseCase {
  execute(data: MovieEntity): Promise<MovieEntity | null>;
}
