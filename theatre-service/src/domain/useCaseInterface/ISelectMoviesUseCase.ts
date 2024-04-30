import { Schema } from "mongoose";
import { ITheatreEntity, MovieEntity } from "../entities";
import { IProps } from "../../application/interfaces/ISelectedMovie";

export interface ISelectMoviesUseCase {
  execute({selectedDateTimes, selectedLanguages, selectedFormats, movieId, theatreId}: IProps, selectedScreens: string[]): Promise<ITheatreEntity>;
}