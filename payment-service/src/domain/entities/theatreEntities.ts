import { ObjectId } from "mongoose";
import { IProps, IScreen } from "./ISelectedMovie";

export interface ITheatreEntity {
    _id?: ObjectId,
    username: string;
    email: string;
    password:string;
    screens:  IScreen[];
    availableSeats: string;
    totalAmountPaid: number;
}