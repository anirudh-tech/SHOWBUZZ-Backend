import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies"

export const setSeatLayoutController = (dependencies: IDependencies) => {
  const {useCases:{setSeatLayoutUseCase}} = dependencies
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {theatreData} = req.body;
      const response = await setSeatLayoutUseCase(dependencies).execute(theatreData)
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