import { IConversationEntity } from "../../domain/entities/conversationEntities";
import { IMessageEntity } from "../../domain/entities/messageEntities";

export interface IRepositories {
  createGroup:({id, groupName}: any) => Promise<any | null>;
  listGroups: (id: string) => Promise<any | null>;
  getMessage: (id: string) => Promise<any | null>;
  addToGroup:({chatId, userId} : any) => Promise<any | null>;
  sendMessage: ({content, chatId, userId}: any) => Promise<any | null>
}