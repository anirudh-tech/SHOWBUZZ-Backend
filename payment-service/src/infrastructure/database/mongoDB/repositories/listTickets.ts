import { Payment } from "../models/paymentModel"

export const listTickets = async(userId: string) => {
  try {
    const tickets = await Payment.find({userId: userId}).populate('theatreId').populate('movieId')
    console.log("🚀 ~ file: listTickets.ts:6 ~ listTickets ~ tickets:", tickets)
    return tickets;
  } catch (error: any) {
    throw new Error(error.message)
  }
}