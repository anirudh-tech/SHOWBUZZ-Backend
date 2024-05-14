import { IConversationEntity } from "../entities/conversationEntities";

export interface ICreateGroupUseCase {
  execute({id, groupName}: any): Promise<IConversationEntity | null>
}