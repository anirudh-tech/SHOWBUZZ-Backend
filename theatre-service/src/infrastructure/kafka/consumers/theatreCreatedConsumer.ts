import { ObjectId } from "mongoose";
import {Theatre} from '../../database/mongoDB/models/theatreModel'

export default async (data: {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  status: string;
}) => {
    try {
        const theatre = new Theatre({
            _id: data._id,
            username: data.username,
            email: data.email,
            password: data.password,
            role: data.role,
            status: data.status,
            
        })

        await theatre.save()
    } catch (error: any) {
        throw new Error(error.message);
    }
};
