import mongoose, { Schema, model } from "mongoose";
import { IUserEntity } from "../../../../domain/entities/userEntities";

const UserSchema: Schema<IUserEntity> = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dateOfJoining: { type: Date, default: Date.now() },
    StreamingTime: { type: Number },
    Subscribed: { type: Boolean, default: false },
    plan: { type: String },
    role: {type: String},
    status:{type: String},
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUserEntity>("users", UserSchema);
