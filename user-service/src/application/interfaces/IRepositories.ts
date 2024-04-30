import { IUserEntity } from "../../domain/entities/userEntities";

export interface IRepositories {
  updateStatus:({id, status}: any) => Promise<IUserEntity | null>
}