import { IAddMovieUseCase } from "../../domain/useCaseInterface.ts/IAddTheatreMovieUseCase";
import { IFindMovieUseCase } from "../../domain/useCaseInterface.ts/IFindMovieUseCase";
import { IGetTheatreMoviesUseCase } from "../../domain/useCaseInterface.ts/IGetTheatreMoviesUseCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  addTheatreMovieUseCase: (dependencies: IDependencies) => IAddMovieUseCase;
  getTheatreMoviesUseCase: (dependencies: IDependencies) => IGetTheatreMoviesUseCase;
  findMovieUseCase: (dependencies: IDependencies) => IFindMovieUseCase;
}