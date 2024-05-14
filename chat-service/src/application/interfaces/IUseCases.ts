import { ICreateGroupUseCase, IGetMessageUseCase, IListGroupsUseCase } from "../../domain/IUseCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  createGroupUseCase: (dependencies: IDependencies) => ICreateGroupUseCase;
  listGroupsUseCase: (dependencies: IDependencies) => IListGroupsUseCase;
  getMessageUseCase: (dependencies: IDependencies) => IGetMessageUseCase;
}