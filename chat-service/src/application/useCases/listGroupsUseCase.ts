import { IDependencies } from "../interfaces/IDependencies";

export const listGroupsUseCase = (dependencies: IDependencies) => {

  const {repositories: {listGroups}} = dependencies;

  return {
    execute: async(id: string) => {
      return await listGroups(id)
    }
  }
}