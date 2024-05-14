import { IMessageEntity } from "../entities/messageEntities";

export interface IGetMessageUseCase {
  execute(id: string): Promise<IMessageEntity[] | null>
}