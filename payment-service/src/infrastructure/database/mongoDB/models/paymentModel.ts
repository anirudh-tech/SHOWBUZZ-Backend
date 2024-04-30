import { model, Schema } from "mongoose";
import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    date: {
      type: Date
    },
    movieId: {
      type: Schema.Types.ObjectId,
      ref: "movie",
    },
    theatreId: {
      type: Schema.Types.ObjectId,
      ref: "theatres",
    },
    ticket: [{
      type: String
    }],
    hour: {
      type: Number,
    },
    min: {
      type: Number,
    },
    total: {
      type: Number,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    ticketStatus: {
      type: Boolean,
      default: true
    }
},
{
    timestamps: true
})

export const Payment = model('payment', paymentSchema);

