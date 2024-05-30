import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Payment } from "../../infrastructure/database/mongoDB/models/paymentModel";

export const getAllTicketsInTheatres = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log("🚀 ~ file: getAllTicketsInTheatres.ts:8 ~ return ~ req.params:", req.params)
    console.log("🚀 ~ file: getAllTicketsInTheatres.ts:8 ~ return ~ id:", id)
    try {
      const page = Number(req.query?.page) || 1;
      console.log("🚀 ~ file: allTickets.ts:10 ~ return ~ page:", page)
      const limit = Number(req.query?.limit) || 5;
      const skip = (page - 1) * limit;
      const tickets: any = await Payment.find({theatreId: id}).skip(skip).limit(limit).populate('theatreId').populate('movieId').populate('userId').sort({date:-1})
      const totalDocuments = await Payment.countDocuments();
      const totalPage = Math.ceil(totalDocuments/limit)

      const formattedTickets = tickets.map((ticket: any) => {
        // Format date using new Date and toLocaleDateString
        const formattedShowDate = new Date(ticket.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const formattedBookedDate = new Date(ticket.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      
        // Create a new object with desired fields and formatted date
        return {
          id: ticket._id,
          username: ticket.userId?.username,
          totalAmountPaid: ticket.total,
          showDate: formattedShowDate,
          bookedDate: formattedBookedDate,
          movieName: ticket.movieId.title,
          theatreName: ticket.theatreId.username,
        };
      });

      const data = {
        tickets: formattedTickets,
        totalPage,
      };
      console.log("🚀 ~ file: allTickets.ts:44 ~ return ~ data:", data)
      res.status(200).json({
        success: true,
        data,
        message: "tickets fetched!",
        })

    } catch (error) {
      
    }
  }
}