import { IAddScreenUseCase, IListTheatreUseCase, ISelectMoviesUseCase, ISetSeatLayoutUseCase, ITheatreDetails, ITimeDetailsUseCase } from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  listTheatresUseCase: (dependencies: IDependencies) => IListTheatreUseCase
  theatreDetailsUseCase: (dependencies: IDependencies) => ITheatreDetails
  selectMoviesUseCase: (dependencies: IDependencies) => ISelectMoviesUseCase
  addScreenUseCase: (dependencies: IDependencies) => IAddScreenUseCase
  setSeatLayoutUseCase: (dependencies: IDependencies) => ISetSeatLayoutUseCase
  timeDetailsUseCase: (dependencies: IDependencies) => ITimeDetailsUseCase
}