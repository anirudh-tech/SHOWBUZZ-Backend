import { model } from "mongoose";
import { MovieEntity } from "../../../../domain/entities/movieEntity";
import mongoose from 'mongoose';

const ottMovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    cast: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "active"
    }
},
{
    timestamps: true
})

export const OttMovie = model<MovieEntity>('ottMovie', ottMovieSchema);

