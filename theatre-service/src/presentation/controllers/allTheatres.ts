import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Theatre } from "../../infrastructure/database/mongoDB/models/theatreModel";

export const allTheatresController = (dependencies: IDependencies) => {
  
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = Number(req.query?.page) || 1;
      const limit = Number(req.query?.limit) || 5;
      const skip = (page - 1) * limit;
      const theatres = await Theatre.find({status:{$in:["active","blocked"]}}).skip(skip).limit(limit)
      const totalDocuments = await Theatre.countDocuments({status: 'active'});
      const totalPage = Math.ceil(totalDocuments/limit)

      const formattedUsers = theatres.map((user) => {
        // Format date using new Date and toLocaleDateString
        const formattedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      
        // Create a new object with desired fields and formatted date
        return {
          _id: user._id,
          username: user.username,
          totalAmountPaid: user.totalAmountPaid,
          createdAt: formattedDate,
          status: user.status
        };
      });
      const data = {
        theatres: formattedUsers,
        totalPage,
      };
      res.status(200).json({
        success: true,
        data,
        message: "theatres fetched!",
        })
    } catch (error: any) {
      next(error);
    }
  }
}