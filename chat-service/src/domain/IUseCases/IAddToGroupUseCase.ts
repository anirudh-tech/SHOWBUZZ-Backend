import { IConversationEntity } from "../entities/conversationEntities";

export interface IAddToGroupUseCase {
  execute({chatId, userId}: any) : Promise <IConversationEntity| null>
}