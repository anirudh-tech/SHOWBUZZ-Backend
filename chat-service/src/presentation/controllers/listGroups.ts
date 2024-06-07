import { NextFunction, Request, Response } from "express"
import { User } from "../../infrastructure/database/mongoDB/models/userModel"
import { IDependencies } from "../../application/interfaces/IDependencies"
import { verifyToken } from "../../utils/verifyToken"

export const listGroupsController = (dependencies: IDependencies) => {

  const {useCases: {listGroupsUseCase}} = dependencies
  return async(req: Request, res: Response, next: NextFunction) => {
    try {
      const encodedToken = req.cookies.user_jwt
      const token: any = verifyToken(encodedToken)
      console.log("🚀 ~ file: createGroup.ts:13 ~ return ~ token:", token)
      const id = token._id
      console.log("🚀 ~ file: listGroups.ts:15 ~ returnasync ~ id:", id)

      const data = await listGroupsUseCase(dependencies).execute(id)
      console.log("🚀 ~ file: listGroups.ts:17 ~ returnasync ~ response:", data)
      res.status(200).json({
        success: true,
        data,
        message: "groups fetched!",
      })
    } catch (error) {
      next(error)
    }
  }
}