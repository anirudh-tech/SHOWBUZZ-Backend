import { IAddToGroupUseCase, ICreateGroupUseCase, IGetMessageUseCase, IListGroupsUseCase, ISendMessageUseCase } from "../../domain/IUseCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
  createGroupUseCase: (dependencies: IDependencies) => ICreateGroupUseCase;
  listGroupsUseCase: (dependencies: IDependencies) => IListGroupsUseCase;
  getMessageUseCase: (dependencies: IDependencies) => IGetMessageUseCase;
  addToGroupUseCase: (dependencies: IDependencies) => IAddToGroupUseCase;
  sendMessageUseCase: (dependencies: IDependencies) => ISendMessageUseCase;
}