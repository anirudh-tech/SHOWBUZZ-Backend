import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/verifyToken";

export const addScreenController = (dependencies: IDependencies) => {
  const {useCases: {addScreenUseCase}} = dependencies

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {inputValue} = req.body
      const encodedToken = req.cookies.user_jwt

      const token: any = verifyToken(encodedToken)

      const theatres = await  addScreenUseCase(dependencies).execute(inputValue,token._id)
      res.status(200).json({success:true, data: theatres, messages: "Screen Added fetched!",})
    } catch (error) {
      
    }
  }
}