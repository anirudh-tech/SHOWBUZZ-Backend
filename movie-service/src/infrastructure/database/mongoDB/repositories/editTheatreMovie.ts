import { Movie } from "../models/movie"

export const editTheatreMovie = async(movieData: any) => {
  console.log("🚀 ~ file: editTheatreMovie.ts:4 ~ editTheatreMovie ~ movieData:", movieData)
  try {    
    const response = await Movie.findByIdAndUpdate(movieData._id, movieData, {new: true})
    console.log("🚀 ~ file: editTheatreMovie.ts:8 ~ editTheatreMovie ~ response:", response)
    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}