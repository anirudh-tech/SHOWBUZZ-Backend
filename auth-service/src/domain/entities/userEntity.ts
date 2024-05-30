import { ObjectId, Types } from "mongoose";

enum Role {
    user = 'user',
    admin = 'admin'
}

export interface UserEntity {
    _id: Types.ObjectId,
    username: string;
    email: string;
    password:string;
    role: string;
    otp?: string;
    status?: string;
}


