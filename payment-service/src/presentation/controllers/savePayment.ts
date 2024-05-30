import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { paymentDoneProducer } from "../../infrastructure/kafka/producers/paymentDoneProducer";
import { verifyToken } from "../../utils/jwt/verifyToken";

export const savePaymentController = (dependencies: IDependencies) => {
  const {
    useCases: { savePaymentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const token : string = req.cookies.user_jwt
    const decodedValue: any = verifyToken(token)
    data.userId = decodedValue._id
    console.log("🚀 ~ file: savePayment.ts:11 ~ return ~ data:", data)
    try {
      const response = await savePaymentUseCase(dependencies).execute(data);
      if (response) {
        const theatreData = {
          _id: data.time._id,
          selectedSeats: data.selectedSeats
        }
        paymentDoneProducer(theatreData)
      }
    } catch (error) {
      next(error)
    }
  };
};
