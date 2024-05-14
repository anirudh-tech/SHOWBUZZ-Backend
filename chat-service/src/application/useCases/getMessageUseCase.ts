import { IDependencies } from "../interfaces/IDependencies";

export const getMessageUseCase = (dependencies: IDependencies) => {
  const {repositories: {getMessage}} = dependencies;

  return {
    execute: async (id : any) => {
      return await getMessage(id)
    }
  }
}