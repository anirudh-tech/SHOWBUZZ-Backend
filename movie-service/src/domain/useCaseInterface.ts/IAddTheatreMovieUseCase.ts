import { MovieEntity } from "../entities/movieEntity";

export interface IAddMovieUseCase {
  execute(data: MovieEntity): Promise<MovieEntity| null>
}