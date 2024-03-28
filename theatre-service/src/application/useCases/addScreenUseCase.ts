import { IDependencies } from "../interfaces/IDependencies";

export const addScreenUseCase = (dependencies: IDependencies) => {
  const {repositories: {addScreen}} = dependencies;

  return {
    execute: async(name: string, theatreId: string) => {
      try {
        return await addScreen(name, theatreId)
      } catch (error: any) {
        throw new Error(error?.message)
      }
    }
  }
}