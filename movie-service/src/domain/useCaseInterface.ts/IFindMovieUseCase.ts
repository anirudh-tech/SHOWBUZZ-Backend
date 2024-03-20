import { MovieEntity } from "../entities/movieEntity";

export interface IFindMovieUseCase {
  execute(id: string): Promise< MovieEntity | null>
}