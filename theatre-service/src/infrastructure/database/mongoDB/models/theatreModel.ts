import mongoose, { Schema, model } from "mongoose";
import { ITheatreEntity } from "../../../../domain/entities/theatreEntities";

const selectedTimeSchema = new Schema({
  hour: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  seatLayoutId: {
    type: Schema.Types.ObjectId,
    ref: "seat"
  },
});

const selectedDateTimeSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  selectedTimes: {
    type: [selectedTimeSchema],
    required: true,
    default: [],
  },
});

const TheatreSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    totalAmountPaid: { type: Number, default: 0 },
    screens: [
      {
        screenName: { type: String, required: true },
        availableSeats: [{
          type: Schema.Types.ObjectId,
          ref: "screen",
        }],
        selectedMovies: [
          {
            movieId: {
              type: Schema.Types.ObjectId,
              ref: "movie",
              required: true,
            },
            selectedDateTimes: {
              type: [selectedDateTimeSchema],
              required: true,
              default: [],
            },
            selectedLanguages: {
              type: [String],
              required: true,
              default: [],
            },
            selectedFormats: {
              type: [String],
              required: true,
              default: [],
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Theatre = model<ITheatreEntity>("theatres", TheatreSchema);
