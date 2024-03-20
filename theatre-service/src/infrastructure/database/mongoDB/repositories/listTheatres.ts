import { ITheatreEntity } from "../../../../domain/entities";
import { Theatre } from "../models/theatreModel"

export const listTheatres = async () => {
  try {
    const theatres = await Theatre.find()
    return theatres as ITheatreEntity[];
  } catch (error: any) {
    throw new Error(error.message);
  }
}