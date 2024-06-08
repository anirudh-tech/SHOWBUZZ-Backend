import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Theatre } from "../../infrastructure/database/mongoDB/models/theatreModel";
import { theatreEditedProducer } from "../../infrastructure/kafka/producers/theatreEditedProducer";

export const handleApprovalController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {id, status} = req.body
      if(status === "approved") {
        const response = await Theatre.findByIdAndUpdate(id,{status: "active"}, {new: true})
        theatreEditedProducer(response)
      } else {
        const response = await Theatre.findByIdAndUpdate(id,{status: "blocked"}, {new: true})
        theatreEditedProducer(response)
      }
      const data = await Theatre.find()
      res.status(200).json({
        success: true,
        data,
        message: "theatres fetched!",
        })
    } catch (error) {
      next(error)
    }
  }
}