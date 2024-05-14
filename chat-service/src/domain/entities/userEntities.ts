import { ObjectId } from "mongoose";

export interface IUserEntity {
    _id?: ObjectId,
    username: string;
    email: string;
    password:string;
    dateOfJoining: Date;
    StreamingTime: number; // In minutes
    Subscribed: boolean;
    plan: string;
    status: string;
    role: string;
}