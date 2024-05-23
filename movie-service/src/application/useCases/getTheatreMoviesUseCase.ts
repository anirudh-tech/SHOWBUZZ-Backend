import { IDependencies } from "../interfaces/IDependencies";

export const getTheatreMoviesUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { getTheatreMovies },
  } = dependencies;

  return {
    execute: async () => {
      try {
        return await getTheatreMovies();
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
