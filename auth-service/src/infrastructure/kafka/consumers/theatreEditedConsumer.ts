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
        
        console.log("🚀 ~ file: theatreEditedConsumer.ts:18 ~ data:", data)
        const response = await User.findByIdAndUpdate(data._id,data)
        console.log("🚀 ~ file: theatreEditedConsumer.ts:14 ~ response:", response)
    } catch (error: any) {
        throw new Error(error.message);
    }
};
