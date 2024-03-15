import { MovieEntity } from "../entities/movieEntity";

export interface IGetTheatreMoviesUseCase {
  execute(): Promise<MovieEntity[] | null>
}