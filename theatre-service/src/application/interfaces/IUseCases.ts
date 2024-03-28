import { IAddScreenUseCase, IListTheatreUseCase, ISelectMoviesUseCase, ITheatreDetails } from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  listTheatresUseCase: (dependencies: IDependencies) => IListTheatreUseCase
  theatreDetailsUseCase: (dependencies: IDependencies) => ITheatreDetails
  selectMoviesUseCase: (dependencies: IDependencies) => ISelectMoviesUseCase
  addScreenUseCase: (dependencies: IDependencies) => IAddScreenUseCase
}