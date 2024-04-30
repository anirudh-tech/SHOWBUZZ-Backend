import { Movie } from "../models/movie"

export const getAllMovies = async ({page, limit}: any) => {
  console.log("🚀 ~ file: getAllMovies.ts:4 ~ getAllMovies ~ page:", page)
  try {
    const skip = (page - 1) * limit;
    const movies = await Movie.find().skip(skip).limit(limit)
    const totalDocuments = await Movie.countDocuments();
    console.log("🚀 ~ file: getAllMovies.ts:9 ~ getAllMovies ~ totalDocuments:", totalDocuments)
    const totalPage = Math.ceil(totalDocuments/limit)
    const data = {
      movies,
      totalPage
    }
    return data
  } catch (error:any) {
    throw new Error(error.message)
  }
}