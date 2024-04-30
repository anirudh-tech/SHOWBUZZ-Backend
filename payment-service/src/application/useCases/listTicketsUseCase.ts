import { IDependencies } from "../interfaces/IDependencies";

export const listTicketsUseCase = (dependencies: IDependencies) => {
  const {repositories: {listTickets}} = dependencies

  return {
    execute: (userId: string) => {
      return listTickets(userId);
    }
  }
}