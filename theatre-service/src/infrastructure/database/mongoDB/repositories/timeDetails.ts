import mongoose from "mongoose";
import { Theatre } from "../models/theatreModel";

export const timeDetails = async(id: string) => {
  console.log("🚀 ~ file: timeDetails.ts:5 ~ timeDetails ~ id:", id)
  try {
    // const theatre: any = await Theatre.findOne(
    //   {
    //     "screens.selectedMovies.selectedDateTimes.selectedTimes._id": id
    //   },
    //   {
    //     "screens.selectedMovies.selectedDateTimes.selectedTimes.$": 1
    //   }
    // );


    const selectedTimeObject: any = await Theatre.aggregate([
      {
        $match: {
          "screens.selectedMovies.selectedDateTimes.selectedTimes._id": new mongoose.Types.ObjectId(id)
        }
      },
      { $unwind: '$screens' },
      { $unwind: '$screens.selectedMovies' },
      { $unwind: '$screens.selectedMovies.selectedDateTimes' },
      // Unwind the arrays to deconstruct them
      // Match the specific selectedTime
      {
        $match: {
          'screens.selectedMovies.selectedDateTimes.selectedTimes._id': new mongoose.Types.ObjectId(id)
        }
      },
      // Project to reshape the document to include only the matched selectedTime
      {
        $project: {
          selectedTimeObject: '$screens.selectedMovies.selectedDateTimes.selectedTimes'
        }
      }
    ]);
    const filteredData = selectedTimeObject[0].selectedTimeObject.filter((item: any) => item._id.equals(id))
    console.log("🚀 ~ file: timeDetails.ts:42 ~ timeDetails ~ filteredData:", filteredData)
    // Extract the selectedTime from the theatre document
    // const selectedTime = theatre?.screens[0]?.selectedMovies[0]?.selectedDateTimes[0]?.selectedTimes[0];
    // console.log("🚀 ~ timeDetails ~ selectedTime:", selectedTime)
    return filteredData[0];
  } catch (error: any) {
    throw new Error(error.message);
  }
}