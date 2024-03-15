import { MovieEntity } from "../../domain/entities/movieEntity";

export interface IRepositories {
  addTheatreMovie: (data: MovieEntity) => Promise<MovieEntity| null>;
  getTheatreMovies: () => Promise<MovieEntity[] | null>
}