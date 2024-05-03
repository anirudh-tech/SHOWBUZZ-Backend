import { NextFunction, Request, Response } from "express"
import { User } from "../../infrastructure/database/mongoDB/models/userModel"

export const listUsersController = () => {
  return async(req: Request, res: Response, next: NextFunction) => {
    try {
      const page = Number(req.query?.page) || 1;
      const limit = Number(req.query?.limit) || 5;
      const skip = (page - 1) * limit;
      const users = await User.find().skip(skip).limit(limit)
      const totalDocuments = await User.countDocuments();
      const totalPage = Math.ceil(totalDocuments/limit)
      const formattedUsers = users.map((user) => {
        // Format date using new Date and toLocaleDateString
        const formattedDate = new Date(user.dateOfJoining).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      
        // Create a new object with desired fields and formatted date
        return {
          _id: user._id,
          username: user.username,
          email: user.email,
          dateOfJoining: formattedDate,
          status: user.status
        };
      });
      const data = {
        users: formattedUsers,
        totalPage,
      };
      res.status(200).json({
        success: true,
        data,
        message: "users fetched!",
        })
    } catch (error) {
      next(error)
    }
  }
}