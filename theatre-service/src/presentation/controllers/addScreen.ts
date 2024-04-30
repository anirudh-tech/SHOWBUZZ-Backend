import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/verifyToken";
import { theatreEditedProducer } from "../../infrastructure/kafka/producers/theatreEditedProducer";

export const addScreenController = (dependencies: IDependencies) => {
  const {useCases: {addScreenUseCase}} = dependencies

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {screenInput, moneyInput} = req.body
      
      const encodedToken = req.cookies.user_jwt

      const token: any = verifyToken(encodedToken)

      const theatres = await  addScreenUseCase(dependencies).execute(screenInput,moneyInput,token._id)
      await theatreEditedProducer(theatres)
      res.status(200).json({success:true, data: theatres, messages: "Screen Added fetched!",})
    } catch (error) {
      
    }
  }
}