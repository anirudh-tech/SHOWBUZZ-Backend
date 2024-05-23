import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { UserEntity } from "../../domain/entities";

export const isExistController = (dependencies: IDependencies) =>{
    const {useCases:{isExistUseCase}} = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.cookies.user_jwt,'--------------')
            const token : string = req.cookies.user_jwt
            const user: UserEntity | null = await isExistUseCase(dependencies).execute(token)
            if(!user){
                throw new Error('User not found');
                
            }else if(user.status == "blocked") {
                // throw new Error('You are blocked.');
                return res.status(401).json({status: "ok", data: null})
            } else {
                res.status(200).json({status: "ok", data: user });
            }
        } catch (error) {
            res.clearCookie("user_jwt");
            next(error)
        }
    }
}