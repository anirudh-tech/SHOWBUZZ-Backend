import { IDependencies } from "../interfaces/IDependencies";

export const addToGroupUseCase = (dependencies: IDependencies) => {
  const {repositories: {addToGroup}} = dependencies;
  return {
    execute: async ({chatId, userId} : any) => {
      return await addToGroup({chatId, userId});
    }
  }
}