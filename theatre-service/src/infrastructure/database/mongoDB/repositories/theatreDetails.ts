import { ITheatreEntity } from "../../../../domain/entities";
import { Theatre } from "../models/theatreModel";

export const theatreDetails = async(id: string) => {
  try { 
    console.log(id,'=======>')
    const theatre = await Theatre.findById(id)
    return theatre as ITheatreEntity;
  } catch (error: any) {
    throw new Error(error.message);
  }
}