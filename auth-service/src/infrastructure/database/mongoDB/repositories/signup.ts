import { User } from "../models/user";
import { UserEntity } from "../../../../domain/entities";

export const signup = async (
    data: UserEntity
) : Promise<UserEntity | null > => {
    try {
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