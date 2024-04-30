import { IDependencies } from "../interfaces/IDependencies"

export const timeDetailsUseCase = (dependencies: IDependencies) => {
  const {repositories: {timeDetails}} = dependencies;

  return {
    execute: async (id: string) => {
      try {
        return await timeDetails(id);
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
  }
}