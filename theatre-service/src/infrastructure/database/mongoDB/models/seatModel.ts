import mongoose from 'mongoose';
import { model } from "mongoose";

const seatSchema = new mongoose.Schema ({
  number: { type: String, required: true },
  booked: { type: Boolean, default: false },
})

export const Seat = model('seat', seatSchema)