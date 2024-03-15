import { UserEntity } from "../../../../domain/entities"
import { verifyToken } from "../../../../utils/jwt/verifyToken"
import { User } from "../models/loginCredentials"

export const isExist = async (token: string): Promise <UserEntity | null> => {
    try {
        const decodedValue: any = verifyToken(token)
        if(decodedValue) {
            const user = await User.findOne({_id: decodedValue._id})
            return user as UserEntity;
        } else {
            throw new Error("could not verify user")
        }
    } catch (error: any) {
        throw new Error(error)
    }
}