import { IDependencies } from "../interfaces/IDependencies";

export const listTheatresUseCase = (dependencies: IDependencies) => {
  const {repositories: {listTheatres}} = dependencies;

  return {
    execute: async (id: string,date:string) => {
      try {
        return await listTheatres(id,date);
      } catch (error: any) {
        throw new Error(error?.message)
      }
    }
  }
}