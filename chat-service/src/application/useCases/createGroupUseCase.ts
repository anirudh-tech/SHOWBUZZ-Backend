import { IDependencies } from "../interfaces/IDependencies";

export const createGroupUseCase = (dependencies: IDependencies) => {
  const {repositories: {createGroup}} = dependencies

  return {
    execute: async ({id, groupName} : any) => {
      return await createGroup({id, groupName})
    }
  }
}