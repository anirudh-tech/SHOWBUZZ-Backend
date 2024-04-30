import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/jwt/verifyToken";

export const listTicketsController = (dependencies: IDependencies) => {
  const {useCases: {listTicketsUseCase}} = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token : string = req.cookies.user_jwt
      const decodedValue: any = verifyToken(token)
      const userId = decodedValue._id
  
      const response = await listTicketsUseCase(dependencies).execute(userId)
  
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