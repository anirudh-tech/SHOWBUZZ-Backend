import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const ticketDetailsController = (dependencies: IDependencies) => {
  const {
    useCases: { ticketDetailsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      console.log("🚀 ~ file: ticketDetails.ts:12 ~ return ~ id:", id)
      const data = await ticketDetailsUseCase(dependencies).execute(id);
      res.status(200).json({
        success: true,
        data,
        message: "ticket details fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};
