import { IDependencies } from "../interfaces/IDependencies";

export const theatreDetailsUseCase = (dependencies: IDependencies) => {
  const { repositories: {theatreDetails}} = dependencies

  return {
    execute: async (id: string) => {
      try {
        return await theatreDetails(id);
      } catch (error: any) {
        throw new Error(error?.message)
      }
    }
  }
}