import { IDependencies } from "../interfaces/IDependencies";

export const findMovieUseCase = (dependencies: IDependencies) => {
  const {repositories: {findMovie}} = dependencies;

  return {
    execute: async (id : string) => {
      try {
        return await findMovie(id)
      } catch (error:any) {
        throw new Error(error?.message)
      }
    }
  }
}