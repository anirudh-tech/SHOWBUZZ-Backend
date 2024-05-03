import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/verifyToken";

export const updateStatusController = (dependencies: IDependencies) => {
  const {useCases: {updateStatusUseCase}} = dependencies

  return async (req: Request, res: Response, next: NextFunction) => {

    try {
      const encodedToken = req.cookies.user_jwt
      const token: any = verifyToken(encodedToken)
      const id = req.body.userId
      console.log("🚀 ~ file: updateStatus.ts:14 ~ return ~ id:", id)
      const status = req.body.newStatus
      console.log("🚀 ~ file: updateStatus.ts:15 ~ return ~ status:", req.body)
      const data = await updateStatusUseCase(dependencies).execute({id,status })
      res.status(200).json({
        success: true,
        data,
        message: "User Updated"
      })
    } catch (error) {
      next(error)
    }


  }
}