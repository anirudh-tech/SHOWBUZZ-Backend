import { IConversationEntity } from "../entities/conversationEntities";

export interface IListGroupsUseCase {
  execute(id: string): Promise<IConversationEntity[] | null>
}