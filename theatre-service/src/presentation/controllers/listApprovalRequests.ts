import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Theatre } from "../../infrastructure/database/mongoDB/models/theatreModel";

export const listApprovalRequestsController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const theatres = await Theatre.find({status: "pending"})
      const formattedUsers = theatres.map((user) => {
        // Create a new object with desired fields and formatted date
        return {
          _id: user._id,
          username: user.username,
          email: user.email,
          status: user.status
        };
      });
      res.status(200).json({
        success: true,
        data: formattedUsers,
        message: "theatres fetched!",
        })
    } catch (error) {
      next(error)
    }
  }
}