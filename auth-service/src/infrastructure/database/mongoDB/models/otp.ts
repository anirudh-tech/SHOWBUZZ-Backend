import { Schema, model } from "mongoose";

const otpSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1m', // Set the expiration time to 1 minutes (in seconds)
    },
})

export const Otp = model("otps",otpSchema)