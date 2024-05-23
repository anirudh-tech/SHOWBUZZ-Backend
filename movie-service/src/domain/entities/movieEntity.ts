import { ObjectId } from "mongoose";

export interface MovieEntity {
  _id?: ObjectId,
  title: string;
  director: string;
  genre:string;
  format?: string;
  languagesAvailable?: string;
  image?: string;
  video?: string;
  banner: string;
  cast: string;
  type?: string;
}