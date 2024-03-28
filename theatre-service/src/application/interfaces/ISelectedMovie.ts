import { Schema } from "mongoose";

export interface IDate{
  date:string;
  selectedTimes: ITime[];
}

export interface ITime{
  hour: number;
  min: number;
}

export interface MovieEntity {
  _id?: Schema.Types.ObjectId,
  title: string;
  director: string ;
  genre:string;
  format?: string;
  languagesAvailable?: string;
  image: string;
  banner: string;
  cast: string;
  type: string;
}

export interface IProps {
  selectedDateTimes?: IDate[];
  selectedLanguages?: string[];
  selectedFormats?: string[];
  movieId?: string ;
  theatreId?: string;
}

export interface ISelecetedScreens {
  selectedScreens?: IScreen[],
}

export interface IScreen {
  screenName: string;
  availableSeats: string ,
  selectedMovies: IProps[]
}

