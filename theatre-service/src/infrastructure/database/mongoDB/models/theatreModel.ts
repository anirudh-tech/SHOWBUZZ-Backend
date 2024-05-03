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
  seatsAvailable: {
    theatreId: { type: String },
    screenId: { type: String },
    rows: [
      [
        {
          number: { type: String },
          booked: { type: Boolean, default: false },
        },
      ],
    ],
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
    status: {type: String, default: 'active'},
    role: {type: String},
    screens: [
      {
        screenName: { type: String, required: true },
        seatLayoutId: {
          type: Schema.Types.ObjectId,
          ref: "seat",
        },
        seatCost: { type: Number, required: true },
        selectedMovies: [
          {
            movieId: {
              type: Schema.Types.ObjectId,
              ref: "movie",
              
            },
            selectedDateTimes: {
              type: [selectedDateTimeSchema],
              
              default: [],
            },
            selectedLanguages: {
              type: [String],
          
              default: [],
            },
            selectedFormats: {
              type: [String],
              
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
