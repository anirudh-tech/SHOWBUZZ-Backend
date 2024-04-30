import { IDependencies } from "../interfaces/IDependencies";
import { IProps } from "../interfaces/ISelectedMovie";

export const selectMoviesUseCase = (dependencies: IDependencies) => {
  const {repositories : {selectMovies}} = dependencies

  return {
    execute: async ({selectedDateTimes, selectedLanguages, selectedFormats, movieId, theatreId}: IProps, selectedScreens: string[]) => {
      try {
        console.log('inside use case',selectedDateTimes);
        return await selectMovies({selectedDateTimes, selectedLanguages, selectedFormats, movieId, theatreId},selectedScreens)
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
  }
}