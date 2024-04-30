import { IScreen } from "../../../../application/interfaces/ISelectedMovie";
import { Seat } from "../models/seatModel";
import { Theatre } from "../models/theatreModel";

export const setSeatLayout = async (data: any) => {
  try {
    console.log(JSON.stringify(data), "=====================");
    let seats;
    const existingSeats = await Seat.findOne({screenId: data.screenId})
    if (existingSeats) {
      await Seat.updateOne({ screenId: data.screenId }, { $set: { rows: data.theatreData.seats } });
    } else {
       seats = await Seat.create({
        theatreId: data.theatreId,
        screenId: data.screenId,
        rows: data.theatreData.seats,
      });
    }

    const theatreResponse = await Theatre.findOne({
      _id: data.theatreId,
      "screens._id": data.screenId,
    });
    
    if(theatreResponse) {
      const screen = theatreResponse.screens.find(screen => screen._id.toString() === data.screenId);
      if(screen && seats) {
        screen.seatLayoutId = seats?._id;
        console.log(screen, "theatreResponse<=========");
        await theatreResponse.save();
      }
    }
    return theatreResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
