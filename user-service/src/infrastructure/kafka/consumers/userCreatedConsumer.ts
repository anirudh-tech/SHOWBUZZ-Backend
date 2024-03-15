import { ObjectId } from "mongoose";
import {User} from '../../database/mongoDB/models/userModel'

export default async (data: {
  username: string;
  email: string;
  password: string;
}) => {
    try {
        
        const user = new User({
            username: data.username,
            email: data.email,
            password: data.password,
        })

        await user.save()
    } catch (error: any) {
        throw new Error(error.message);
    }
};
