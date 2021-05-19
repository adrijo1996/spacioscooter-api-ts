import { number } from "joi";
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    dni: String,
    birthday: Date,
    roadType: String,
    address: String,
    postalCode: Number,
    town: String,
    province: String,
    phoneNumber: String,
    email: String,
    motocycle: String,
    active:{type: Boolean, default: true},
    role: {type: String, enum: ["directiva", "normal"], default : "normal"},

  },
  {
    timestamps: true,
  },
);

const Socios = mongoose.model("Socios", schema);

export default Socios;