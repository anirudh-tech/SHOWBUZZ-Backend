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
    role: Role;
    otp?: string;
    status?: string;
}


