import mongoose, { Schema, model } from "mongoose";
import { ITheatreEntity } from "../../../../domain/entities/theatreEntities";

const TheatreSchema: Schema<ITheatreEntity> = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    selectedMovies: [{ type: Schema.Types.ObjectId }],
    availableSeats: { type: String },
    totalAmountPaid: {type: Number,  default: 0}
  },
  {
    timestamps: true,
  });

export const Theatre = model<ITheatreEntity>("theatres", TheatreSchema);
