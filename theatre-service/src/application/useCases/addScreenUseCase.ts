import { IDependencies } from "../interfaces/IDependencies";

export const addScreenUseCase = (dependencies: IDependencies) => {
  const {repositories: {addScreen}} = dependencies;

  return {
    execute: async(screenInput: string,moneyInput: string,  theatreId: string) => {
      try {
        return await addScreen(screenInput, moneyInput, theatreId)
      } catch (error: any) {
        throw new Error(error?.message)
      }
    }
  }
}