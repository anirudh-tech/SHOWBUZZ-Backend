import { ObjectId } from "mongoose";

export interface IConversationEntity {
  _id?: ObjectId;
  participants: ObjectId[];
  groupName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}