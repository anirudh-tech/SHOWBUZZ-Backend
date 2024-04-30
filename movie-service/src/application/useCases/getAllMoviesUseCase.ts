import { IDependencies } from "../interfaces/IDependencies";

export const getAllMoviesUseCase = (dependencies: IDependencies) => {
  const {repositories: {getAllMovies}} = dependencies;

  return{
    execute: async( {page, limit}: any) => {
      try {
        return await getAllMovies({page, limit})
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
  }
} 