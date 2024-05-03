import { NextFunction, Request, Response } from "express"
import { User } from "../../infrastructure/database/mongoDB/models/userModel"

export const listUserWithId = () => {
  return async(req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await User.findById(req.params.id)
      res.status(200).json({
        success: true,
        data,
        message: "user fetched!",
        })
    } catch (error) {
      next(error)
    }
  }
}