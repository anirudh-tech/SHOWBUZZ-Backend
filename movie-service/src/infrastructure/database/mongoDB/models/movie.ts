import { model } from "mongoose";
import { MovieEntity } from "../../../../domain/entities/movieEntity";
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
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
    format: [{
        type: String,
    }],
    languagesAvailable: {
        type: String,
    },
    image: {
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
    type: {
        type: String,
        enum: ['theatre','ott']
    },
    dateOfRelease: {
        type: Date,
    },
    status: {
        type: String,
        default: "active"
    }
},
{
    timestamps: true
})

export const Movie = model<MovieEntity>('movie', movieSchema);

