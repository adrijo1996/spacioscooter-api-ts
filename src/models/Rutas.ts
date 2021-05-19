import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    day: String,
    duration: Number,
    creator: String,
    //role default directiva
  },
  {
    timestamps: true,
  },
);

const Rutas = mongoose.model("Rutas", schema);

export default Rutas;