import { MovieEntity } from "../../domain/entities/movieEntity";

export interface IRepositories {
  addTheatreMovie: (data: MovieEntity) => Promise<MovieEntity | null>;
  getTheatreMovies: () => Promise<MovieEntity[] | null>;
  findMovie: (id: string) => Promise<MovieEntity | null>;
  editTheatreMovie: (movieData: MovieEntity) => Promise<MovieEntity | null>;
  getAllMovies: ({ page, limit }: any) => Promise<any | null>;
  addOttMovie: (data: MovieEntity) => Promise<any | null>;
}
