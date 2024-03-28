import { ObjectId } from "mongoose";
import {Theatre} from '../../database/mongoDB/models/theatreModel'
import { MovieEntity } from "../../../domain/entities";
import { Movie } from "../../database/mongoDB/models/movieModel";

export default async (data: MovieEntity) => {
    try {
      const movie = await Movie.create(data)
    } catch (error: any) {
        throw new Error(error.message);
    }
};
