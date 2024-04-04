import { ITheatreEntity } from "../../../../domain/entities";
import { Theatre } from "../models/theatreModel";

export const addScreen = async (name: string, theatreId: string) => {
  try {
    console.log(name,theatreId,'name---->')
    const theatre = await Theatre.findOneAndUpdate(
      { _id: theatreId },
      { $push: { screens: { screenName: name } } },
      { new: true }
    );
    return theatre as ITheatreEntity
  } catch (error: any) {
    throw new Error(error.message);
  }
}