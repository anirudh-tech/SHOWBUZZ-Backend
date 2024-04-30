import { IDependencies } from "../interfaces/IDependencies"

export const setSeatLayoutUseCase = (dependencies: IDependencies) => {
  const {repositories:{setSeatLayout}} = dependencies

  return {
    execute: async (theatreData:any) => {
      try {
        return await setSeatLayout(theatreData)
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
  }
}