import { Payment } from "../models/paymentModel"

export const savePayment = async(data: any) => {
  console.log("🚀 ~ file: savePayment.ts:4 ~ savePayment ~ data:", data)
  try {
    const filteredData = {
      date : data.selectedDate,
      movieId: data.movieId,
      theatreId: data.theatreId,
      ticket:data.selectedSeats,
      hour:data.time.hour,
      min: data.time.min,
      total: data.totalAmount,
      userId: data.userId,
    }
    const response = await Payment.create(filteredData)

    return response
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message)
  }

}