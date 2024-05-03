import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { User } from "../../infrastructure/database/mongoDB/models/userModel";

export const updateUserController = (dependencies: IDependencies) =>{

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
          const {id, ...rest} = req.body
          console.log("🚀 ~ file: updateUser.ts:10 ~ return ~ rest:", rest)
          const response = await User.findByIdAndUpdate(id,{...rest}, {new:true})
          console.log("🚀 ~ file: updateUser.ts:11 ~ return ~ response:", response)
          res.json({
            success: true,
            data: response,
            message: " updated details successfully"
          })
          
        } catch (error) {
            next(error)
        }
    }
}