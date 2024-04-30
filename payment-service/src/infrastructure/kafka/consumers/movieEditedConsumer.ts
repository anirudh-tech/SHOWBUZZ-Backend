import { ObjectId } from "mongoose";
import {Theatre} from '../../database/mongoDB/models/theatreModel'
import { MovieEntity } from "../../../domain/entities/movieEntity"; 
import { Movie } from "../../database/mongoDB/models/movieModel";

export default async (data: MovieEntity) => {
    try {
      const movie = await Movie.findByIdAndUpdate(data._id,data, {new: true})
      console.log("🚀 ~ file: movieEditedConsumer.ts:9 ~ movie:", movie)
    } catch (error: any) {
        throw new Error(error.message);
    }
};
