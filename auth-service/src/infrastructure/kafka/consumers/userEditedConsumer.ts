import { ObjectId } from "mongoose";
import { User } from "../../database/mongoDB/models/loginCredentials";

export default async (data: {
  _id: string;
  username: string;
  email: string;
  password: string;
  status: string;
}) => {
    try {
        data;
        const response = await User.findByIdAndUpdate(data._id,data)
    } catch (error: any) {
        throw new Error(error.message);
    }
};
