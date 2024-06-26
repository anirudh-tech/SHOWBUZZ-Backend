import { isValid, parseISO } from "date-fns";
import { ITheatreEntity } from "../../../../domain/entities";
import { Theatre } from "../models/theatreModel"

export const listTheatres = async (movieId: string, date: string) => {
  console.log("🚀 ~ file: listTheatres.ts:6 ~ listTheatres ~ date:", date)
  console.log("🚀 ~ file: listTheatres.ts:6 ~ listTheatres ~ movieId:", movieId)
  try {
 
    // Use the parsed date in the MongoDB query
    const theatres = await Theatre.find({
      "screens.selectedMovies": {
        $elemMatch: {
          movieId: movieId,
          "selectedDateTimes.date": date
        }
      }
    }).populate('screens.selectedMovies.movieId')
    console.log(theatres,'👍👍👍👍👍👍👍')
    return theatres as ITheatreEntity[];
  } catch (error: any) {
    throw new Error(error.message);
  }
}