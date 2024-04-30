import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies"
import { theatreEditedProducer } from "../../infrastructure/kafka/producers/theatreEditedProducer"
import { Theatre } from "../../infrastructure/database/mongoDB/models/theatreModel"

export const setSeatLayoutController = (dependencies: IDependencies) => {
  const {useCases:{setSeatLayoutUseCase}} = dependencies

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const response = await setSeatLayoutUseCase(dependencies).execute(data)
      await theatreEditedProducer(response)
      res.status(201).json({
        success: true,
        data: response,
        message: 'The seat layout was successfully created'
      })
    } catch (error) {
      next(error)
    }
  }
}