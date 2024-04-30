import { ITheatreEntity } from "../../domain/entities/theatreEntities";
import { IProps, MovieEntity } from "./ISelectedMovie";

export interface IRepositories {
  listTheatres: (id:string, date: string) => Promise<ITheatreEntity[] | null>
  theatreDetails: (id: string) => Promise<ITheatreEntity | null>
  selectMovies: ({selectedDateTimes, selectedLanguages, selectedFormats, movieId}: IProps,selectedScreens: string[]) => Promise<ITheatreEntity>
  addScreen: (screenInput: string,moneyInput: string, theatreId: string) => Promise<ITheatreEntity>
  setSeatLayout: (theatreData: any) => Promise<ITheatreEntity | null>
  timeDetails: (timeId: string) => Promise<ITheatreEntity | null>
}