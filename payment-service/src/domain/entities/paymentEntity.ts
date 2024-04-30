import { ObjectId } from "mongoose";

export interface IPaymentEntity {
  _id?: ObjectId,
  date: Date;
  movie: string;
  theatreName:string;
  ticket: string[];
  hour: number;
  min: number;
  total: number;
}