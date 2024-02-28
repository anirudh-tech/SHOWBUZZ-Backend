import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { dependencies } from "../../config/dependencies";
import { signupValidation } from "../../utils/validations/signupValidation";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import jwt from "jsonwebtoken";

export const signupController = (dependencies: IDependencies) => {
    const {useCases: {signupUserUseCase}} =  dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {value, error}  = signupValidation.validate(req.body);
            if(error) {
                throw new Error(error.message)
            }

            value.password = await hashPassword(value.password);

            const result = await signupUserUseCase(dependencies).execute(value);

            if(!result){
                throw new Error("User creation failed!");
            }

            let payload = {
                _id: String(result?._id),
                email: result?.email!,
                role: result?.role!
            }
            const accessToken = jwt.sign(
                payload,
                String(process.env.ACCESS_TOKEN_SECRET),
                { expiresIn: '1h' }
            );

            res.cookie("access_token", accessToken, {
                httpOnly: true
            });

            res.status(200).json({
                success: true,
                data: result,
                message: "User created!"
            });

        } catch (error: any) {
            next(error);
        }
    }

}