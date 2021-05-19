import express from "express";
import Socios from "../models/Socios";

export const router = express.Router();

router.get("/socios", async (req, res) => {
  const socios = await Socios.find().lean();
  res.json({ socios });
});

router.get("/socios/:_id", async (req, res) => {
  let query = {};
  const { _id } = req.params;
  query = { _id };
  const socios = await Socios.find(query);
  res.json(socios);
});

router.post('/socios', async (req, res) => {
  const {
    name, surname, dni, birthday, roadType, address, postalCode, town, province, phoneNumber, email, motocycle
  } = req.body;
  const newData = {
    name, surname, dni, birthday, roadType, address, postalCode, town, province, phoneNumber, email, motocycle
  };
  const socios  = await Socios.create(newData);
  res.json(socios);
});