import { ObjectId } from "mongoose";

export interface IConversationEntity {
  _id?: ObjectId;
  participants: any;
  groupName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}