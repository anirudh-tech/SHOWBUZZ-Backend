import { ObjectId } from "mongoose";

export interface IMessageEntity {
    _id?: ObjectId;
    conversationId: ObjectId;
    sender: ObjectId;
    content: string;
    sentAt?: Date;
    readBy?: ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
  }