import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { UserEntity } from "../../domain/entities";
import jwt from "jsonwebtoken";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/userCreatedProducer";

export const loginController = (dependencies: IDependencies) => {
  const {
    useCases: { loginUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userCredentials = req.body;
      const user: UserEntity | null = await loginUserUseCase(
        dependencies
      ).execute(userCredentials);
      if (user) {
        if (user.status === "blocked") {
          return res.status(403).json({ message: "You are blocked." });
        }
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
        console.log(accessToken, "token");

        res.cookie("user_jwt", accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });

        // userCreatedProducer()
        res.status(200).json({
          success: true,
          user: user,
          message: "User verified!",
        });
      }
    } catch (error: any) {
      next(error);
    }
  };
};
