import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/verifyToken";

export const createGroupController = (dependencies: IDependencies) => {
  const {useCases: {createGroupUseCase,listGroupsUseCase}} = dependencies

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {groupName} = req.body
      console.log("🚀 ~ file: createGroup.ts:11 ~ return ~ groupName:", groupName)
      const encodedToken = req.cookies.user_jwt
      const token: any = verifyToken(encodedToken)
      console.log("🚀 ~ file: createGroup.ts:13 ~ return ~ token:", token)
      const id = token._id
      const response = await createGroupUseCase(dependencies).execute({id, groupName })
      let data;
      if(response) {
         data = await listGroupsUseCase(dependencies).execute(id)
      }
      res.status(200).json({
        success: true,
        data,
        message: "group created!",
        })
    } catch (error) {
      next(error)
    }


  }
}