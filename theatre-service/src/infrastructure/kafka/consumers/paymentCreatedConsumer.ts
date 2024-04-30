// import mongoose from "mongoose";
// import { Theatre } from "../../database/mongoDB/models/theatreModel";

// export default async (data: any) => {
//   console.log("🚀 ~ file: paymentCreatedConsumer.ts:4 ~ data:", data);
//   try {
//     const selectedTimeObject = await Theatre.aggregate([
//       // Match documents containing the specific selectedTime
//       {
//         $match: {
//           'screens.selectedMovies.selectedDateTimes.selectedTimes._id': new mongoose.Types.ObjectId(data._id)
//         }
//       },
//       { $unwind: '$screens' },
//       { $unwind: '$screens.selectedMovies' },
//       { $unwind: '$screens.selectedMovies.selectedDateTimes' },
//       // Unwind the arrays to deconstruct them
//       // Match the specific selectedTime
//       {
//         $match: {
//           'screens.selectedMovies.selectedDateTimes.selectedTimes._id': new mongoose.Types.ObjectId(data._id)
//         }
//       },
//       // Project to reshape the document to include only the matched selectedTime
//       {
//         $project: {
//           selectedTimeObject: '$screens.selectedMovies.selectedDateTimes.selectedTimes'
//         }
//       }
//     ]);

//     const filteredData = selectedTimeObject[0].selectedTimeObject.filter((item: any) => item._id.equals(data._id))
//     console.log("🚀 ~ file: paymentCreatedConsumer.ts:34 ~ selectedTime:", filteredData)
//     filteredData[0].seatsAvailable.rows.forEach((row: any) => {
//       row.forEach((item: any) => {
//         if (data.selectedSeats.includes(item.number)) {
//           item.booked = true;
//         }
//       });
//     });
    
//     filteredData.save()
//     console.log("🚀 ~ file: paymentCreatedConsumer.ts:43 ~ selectedTime:", filteredData[0].seatsAvailable.rows)
//   } catch (error: any) {
//     console.log(error.message);
//     throw new Error(error.message);
//   }
// };















import mongoose from "mongoose";
import { Theatre } from "../../database/mongoDB/models/theatreModel";

export default async (data: any) => {
  console.log("🚀 ~ file: paymentCreatedConsumer.ts:4 ~ data:", data);
  try {
    const selectedTimeObject = await Theatre.aggregate([
      // Match documents containing the specific selectedTime
      {
        $match: {
          'screens.selectedMovies.selectedDateTimes.selectedTimes._id': new mongoose.Types.ObjectId(data._id)
        }
      },
      { $unwind: '$screens' },
      { $unwind: '$screens.selectedMovies' },
      { $unwind: '$screens.selectedMovies.selectedDateTimes' },
      // Unwind the arrays to deconstruct them
      // Match the specific selectedTime
      {
        $match: {
          'screens.selectedMovies.selectedDateTimes.selectedTimes._id': new mongoose.Types.ObjectId(data._id)
        }
      },
      // Project to reshape the document to include only the matched selectedTime
      {
        $project: {
          selectedTimeObject: '$screens.selectedMovies.selectedDateTimes.selectedTimes'
        }
      }
    ]);

    const filteredData = selectedTimeObject[0].selectedTimeObject.filter((item: any) => item._id.equals(data._id))
    console.log("🚀 ~ file: paymentCreatedConsumer.ts:34 ~ selectedTime:", filteredData)
    filteredData[0].seatsAvailable.rows.forEach((row: any) => {
      row.forEach((item: any) => {
        if (data.selectedSeats.includes(item.number)) {
          item.booked = true;
        }
      });
    });
    
    // Update the documents in the database
    const updateResult = await Theatre.updateOne(
      {
        'screens.selectedMovies.selectedDateTimes.selectedTimes._id': new mongoose.Types.ObjectId(data._id)
      },
      {
        $set: { 'screens.$[screen].selectedMovies.$[movie].selectedDateTimes.$[date].selectedTimes.$[time].seatsAvailable.rows': filteredData[0].seatsAvailable.rows }
      },
      {
        arrayFilters: [
          { 'screen.selectedMovies.selectedDateTimes.selectedTimes._id':  new mongoose.Types.ObjectId(data._id) },
          { 'movie.selectedDateTimes.selectedTimes._id':  new mongoose.Types.ObjectId(data._id) },
          { 'date.selectedTimes._id':  new mongoose.Types.ObjectId(data._id) },
          { 'time._id':  new mongoose.Types.ObjectId(data._id) }
        ]
      }
    );

    console.log("🚀 ~ file: paymentCreatedConsumer.ts:43 ~ updateResult:", updateResult);

  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
