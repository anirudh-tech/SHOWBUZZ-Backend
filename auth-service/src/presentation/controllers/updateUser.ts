import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { UserEntity } from "../../domain/entities";

export const updateUserController = (dependencies: IDependencies) =>{
    const {useCases:{ updateUserUseCase}} = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
          const {username, id} = req.body
          const response = await updateUserUseCase(dependencies).execute(id, username)
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