import { IListTheatreUseCase } from "../../domain/useCaseInterface";
import { ITheatreDetails } from "../../domain/useCaseInterface/ITheatreDetailsUseCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  listTheatresUseCase: (dependencies: IDependencies) => IListTheatreUseCase
  theatreDetailsUseCase: (dependencies: IDependencies) => ITheatreDetails
}