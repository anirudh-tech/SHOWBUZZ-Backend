
import { IListTicketsUseCase } from "../../domain/useCaseInterface.ts/IListTicketsUseCase";
import { ISavePaymentUseCase } from "../../domain/useCaseInterface.ts/ISavePaymentUseCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  savePaymentUseCase: (dependencies: IDependencies) => ISavePaymentUseCase;
  listTicketsUseCase: (dependencies: IDependencies) => IListTicketsUseCase;
}