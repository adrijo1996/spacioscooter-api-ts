import express from "express";
import Rutas from "../models/Rutas";

export const router = express.Router();

router.get("/rutas", async (req, res) => {
  const rutas = await Rutas.find().lean();
  res.json({ rutas });
});

router.post('/rutas', async (req, res) => {
  const {
    name,
  } = req.body;
  const newData = {
    name,
  };
  const rutas = await Rutas.create(newData);
  res.json(rutas);
});