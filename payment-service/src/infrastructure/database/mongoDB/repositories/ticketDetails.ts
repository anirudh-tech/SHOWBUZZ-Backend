import { Payment } from "../models/paymentModel";

export const ticketDetails = async (id: string) => {
  try {
    const data = await Payment.findById(id).populate('theatreId').populate('movieId').populate('userId')
    return data;
  } catch (error: any) {
    throw new Error(error.message)
  }
};
