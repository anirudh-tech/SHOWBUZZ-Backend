import { ObjectId } from "mongoose";
import {User} from '../../database/mongoDB/models/userModel'

export default async (data: {
    _id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  status: string;
}) => {
    try {
        
        const user = new User({
            _id: data._id,
            username: data.username,
            email: data.email,
            password: data.password,
            role: data.role,
            status: data.status,
        })

        await user.save()
    } catch (error: any) {
        throw new Error(error.message);
    }
};
