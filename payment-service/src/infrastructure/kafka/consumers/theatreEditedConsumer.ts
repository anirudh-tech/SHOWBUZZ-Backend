import { ObjectId } from "mongoose";
import {Theatre} from '../../database/mongoDB/models/theatreModel'

export default async (data: {
  _id: string;
  username: string;
  email: string;
  password: string;
}) => {
    try {
        data;
        const response = await Theatre.findByIdAndUpdate(data._id,data)
    } catch (error: any) {
        throw new Error(error.message);
    }
};
