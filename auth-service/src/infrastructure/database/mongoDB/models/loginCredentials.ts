import { Schema, model } from "mongoose";
import { UserEntity } from "../../../../domain/entities";

const userSchema = new Schema ({ 
    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin","theatre"],
        default: "user"
    },
    otp: {
        type: String
    }
}, {
    timestamps: true
})

export const User = model<UserEntity>("logincredentials",userSchema)