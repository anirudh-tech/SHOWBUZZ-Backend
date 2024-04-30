import { UserEntity } from "../../domain/entities";
import { UserLoginEntity } from "../../domain/entities/userLoginEntity";

export interface IRepositories {
    signup: (data:UserEntity) => Promise<UserEntity | null>;
    checkEmail:(email: string) =>  Promise<boolean>;
    verifyOtp:(email:string, otp:string) => Promise<boolean>;
    login:(data: UserLoginEntity) => Promise<UserEntity | null>;
    isExist:(token: string) => Promise<UserEntity | null> ;
    updateUser: (id: string, username: string) => Promise<UserEntity | null>;
}