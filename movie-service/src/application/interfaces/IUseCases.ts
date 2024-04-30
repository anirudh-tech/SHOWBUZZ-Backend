import { IAddMovieUseCase } from "../../domain/useCaseInterface.ts/IAddTheatreMovieUseCase";
import { IEditTheatreMovieUseCase } from "../../domain/useCaseInterface.ts/IEditTheatreMovieUseCase";
import { IFindMovieUseCase } from "../../domain/useCaseInterface.ts/IFindMovieUseCase";
import { IGetAllMoviesUseCase } from "../../domain/useCaseInterface.ts/IGetAllMoviesUseCase";
import { IGetTheatreMoviesUseCase } from "../../domain/useCaseInterface.ts/IGetTheatreMoviesUseCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  addTheatreMovieUseCase: (dependencies: IDependencies) => IAddMovieUseCase;
  getTheatreMoviesUseCase: (dependencies: IDependencies) => IGetTheatreMoviesUseCase;
  findMovieUseCase: (dependencies: IDependencies) => IFindMovieUseCase;
  editTheatreMovieUseCase: (dependencies: IDependencies) => IEditTheatreMovieUseCase;
  getAllMoviesUseCase: (dependencies: IDependencies) => IGetAllMoviesUseCase;
}