import { ITheatreEntity } from "../../domain/entities/theatreEntities";
import { IProps, MovieEntity } from "./ISelectedMovie";

export interface IRepositories {
  listTheatres: () => Promise<ITheatreEntity[] | null>
  theatreDetails: (id: string) => Promise<ITheatreEntity | null>
  selectMovies: ({selectedDateTimes, selectedLanguages, selectedFormats, movieId}: IProps,selectedScreens: string) => Promise<MovieEntity>
  addScreen: (name: string, theatreId: string) => Promise<ITheatreEntity>
}