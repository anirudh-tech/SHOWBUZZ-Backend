import { User } from "../models/loginCredentials"

export const checkEmail = async (email: string)  => {
    try {
        const userExist = await User.findOne({email});
        return userExist  ? true : false;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}