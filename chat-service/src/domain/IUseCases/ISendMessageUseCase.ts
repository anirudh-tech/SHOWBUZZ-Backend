import { IMessageEntity } from "../entities/messageEntities";

export interface ISendMessageUseCase{
  execute({content, chatId, userId}: any): Promise<IMessageEntity | null>
}