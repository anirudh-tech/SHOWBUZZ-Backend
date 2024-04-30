import { IDependencies } from "../interfaces/IDependencies";

export const updateUserUseCase = (dependencies: IDependencies) => {
  const {repositories: {updateUser}} = dependencies;

  return {
    execute: async (id: string, username: string) => {
      try {
        return await updateUser(id, username);
      } catch (error: any) {
        throw new Error(error?.message)
      }
    }
  }
}