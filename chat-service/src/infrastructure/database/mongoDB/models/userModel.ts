import mongoose, { Schema, model } from "mongoose";
import { IUserEntity } from "../../../../domain/entities/userEntities";

const userSchema: Schema<any> = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dateOfJoining: { type: Date, default: Date.now() },
    StreamingTime: { type: Number },
    Subscribed: { type: Boolean, default: false },
    plan: { type: String },
    status:{type: String},
  },
  {
    timestamps: true,
  }
);

export const User = model('user', userSchema);
