import { IDependencies } from "../interfaces/IDependencies";

export const listTheatresUseCase = (dependencies: IDependencies) => {
  const {repositories: {listTheatres}} = dependencies;

  return {
    execute: async () => {
      try {
        return await listTheatres();
      } catch (error: any) {
        throw new Error(error?.message)
      }
    }
  }
}