import { IConversationEntity } from "../../domain/entities/conversationEntities";
import { IMessageEntity } from "../../domain/entities/messageEntities";

export interface IRepositories {
  createGroup:({id, groupName}: any) => Promise<IConversationEntity | null>
  listGroups: (id: string) => Promise<IConversationEntity | null>
  getMessage: (id: string) => Promise<IMessageEntity[] | null>
}