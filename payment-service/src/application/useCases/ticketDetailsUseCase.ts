import { IDependencies } from "../interfaces/IDependencies";

export const ticketDetailsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { ticketDetails },
  } = dependencies;

  return {
    execute: async (id: string) => {
      return await ticketDetails(id);
    },
  };
};
