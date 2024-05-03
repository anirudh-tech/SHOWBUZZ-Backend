import { IDependencies } from "../interfaces/IDependencies";

export const updateStatusUseCase = (dependencies: IDependencies) => {
  const {repositories: {updateStatus}} = dependencies

  return {
    execute: async ({id, status} : any) => {
      return await updateStatus({id, status})
    }
  }
}