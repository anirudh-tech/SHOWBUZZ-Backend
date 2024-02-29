import { User } from "../models/user";
import { UserEntity } from "../../../../domain/entities";
import { UserLoginEntity } from "../../../../domain/entities/userLoginEntity";
import bcrypt from 'bcrypt'

export const login = async (
    data: UserLoginEntity
) : Promise<UserEntity | null > => {
    try {
        const user : UserEntity | null =  await User.findOne({email:data.email})
        console.log(user,'new user,repo,signup')
        // check if password is same or not
        if(user) {
            const isMatch : boolean = await bcrypt.compare(data.password,user.password)
            if(!isMatch){
                throw new Error("User creation failed!");
            }else{
                return user as UserEntity;
            }
        }else{
            throw new Error("User creation failed!");
        }
    } catch (error: any) {
        throw new Error(error?.message);
    }
}