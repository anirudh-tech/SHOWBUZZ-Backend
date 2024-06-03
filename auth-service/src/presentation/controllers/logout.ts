import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const logoutController = (dependencies: IDependencies) => {

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.clearCookie("user_jwt",{
                httpOnly: true,
                secure: true,
                sameSite: "none"
            });
            res.status(200).json({message:"Logged out"});
        } catch (error : any) {
            next(error)
        }
    }
}