import { NextFunction, Request, Response } from "express";
import { Payment } from "../../infrastructure/database/mongoDB/models/paymentModel";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const getAllPaymentsOfTheatre = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const payments = await Payment.find({ theatreId: id })
      const totalAmount = payments.reduce((acc: number, payment: any) => 
         acc + payment.total
      , 0);
      console.log(
        "🚀 ~ file: getAllPaymentsOfTheatre.ts:13 ~ totalAmount ~ totalAmount:",
        totalAmount
      );
      const data = {
        payments,
        totalAmount
      }

      res.status(200).json({
        success: true,
        data: data,
        message: "payments fetched"
      })
      
    } catch (error) {
      next(error);
    }
  };
};
