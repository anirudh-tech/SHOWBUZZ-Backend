import { IUserEntity } from "../entities/userEntities";

export interface IUpdateStatusUseCase {
  execute({id, status}: any): Promise<IUserEntity | null>
}