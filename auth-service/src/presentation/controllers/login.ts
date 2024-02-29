import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies"
import { UserEntity } from "../../domain/entities"
import jwt from "jsonwebtoken";

export const loginController = (dependencies: IDependencies) => {
    const {useCases : {loginUserUseCase}} = dependencies

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userCredentials = req.body
            const user: UserEntity | null = await loginUserUseCase(dependencies).execute(userCredentials)
            if(user) {
                let payload = {
                    _id: String(user?._id),
                    email: user?.email!,
                    role: user?.role!,
                  };
                  const accessToken = jwt.sign(
                    payload,
                    String(process.env.ACCESS_TOKEN_SECRET),
                    { expiresIn: "1h" }
                  );
    
                  res.cookie("access_token", accessToken, {
                    httpOnly: true,
                  });

                res.status(200).json({
                success: true,
                data: user,
                message: "User verified!",
                })
            }
        } catch (error: any) {
            next(error)
        }
    }
}