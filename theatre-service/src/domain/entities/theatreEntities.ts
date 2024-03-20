import { ObjectId } from "mongoose";

export interface ITheatreEntity {
    _id?: ObjectId,
    username: string;
    email: string;
    password:string;
    selectedMovies: ObjectId[];
    availableSeats: string;
    totalAmountPaid: number;
}