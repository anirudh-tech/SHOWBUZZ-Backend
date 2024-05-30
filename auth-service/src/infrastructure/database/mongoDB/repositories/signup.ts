import { User } from "../models/loginCredentials";
import { UserEntity } from "../../../../domain/entities";

export const signup = async (
    data: UserEntity
) : Promise<UserEntity | null > => {
    try {
        if(data.role == "theatre"){
            data.status = "pending"
        }
        const newUser = await User.create(data)
        console.log(newUser,'new user,repo,signup')
        
        if (!newUser) {
            throw new Error("User creation failed!");
        }

        return newUser as UserEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}