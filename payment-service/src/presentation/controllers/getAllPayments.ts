import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/jwt/verifyToken";
import { Payment } from "../../infrastructure/database/mongoDB/models/paymentModel";

export const getAllPaymentsController = (dependencies: IDependencies) => {
  const {useCases: {listTicketsUseCase}} = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await Payment.find()
  
      res.status(200).json({
        success: true,
        data: response,
        message: "tickets fetched"
      })
    } catch (error) {
      next(error)
    }

  }
}