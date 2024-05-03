import { User } from "../models/userModel"

export const updateStatus = async ({id, status}: any) => {
  try {
    const response = await User.findByIdAndUpdate(id, {status}, {new: true})
    return response
  } catch (error:any) {
    throw new Error(error.message)
  }
}