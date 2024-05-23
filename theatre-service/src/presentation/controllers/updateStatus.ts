import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Theatre } from "../../infrastructure/database/mongoDB/models/theatreModel";
import { theatreEditedProducer } from "../../infrastructure/kafka/producers/theatreEditedProducer";

export const updateStatusController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = req.body.userId;
    console.log("🚀 ~ file: updateStatus.ts:14 ~ return ~ id:", id);
    const status = req.body.newStatus;
    const data = await Theatre.findByIdAndUpdate(id, { status }, { new: true });
    theatreEditedProducer(data);
    res.status(200).json({
      success: true,
      data,
      message: "Theatre Updated",
    });
  };
};
