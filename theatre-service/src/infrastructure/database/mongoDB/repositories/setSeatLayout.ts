import { Seat } from "../models/seatModel"

export const setSeatLayout = async(theatreData) => {
  try {
    const seats = await Seat.create(theatreData)
    return seats
  } catch (error: any) {
    throw new Error(error.message)
  }
}