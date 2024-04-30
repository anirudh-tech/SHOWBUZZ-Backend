import { ITheatreEntity } from "../../../../domain/entities";
import { Theatre } from "../models/theatreModel";

export const addScreen = async (screenInput: string, moneyInput: string, theatreId: string) => {
  try {
    const theatre = await Theatre.findOneAndUpdate(
      { _id: theatreId },
      { $push: { screens: { screenName: screenInput, seatCost: moneyInput } } },
      { new: true }
    );
    return theatre as ITheatreEntity
  } catch (error: any) {
    throw new Error(error.message);
  }
}