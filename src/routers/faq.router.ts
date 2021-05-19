import express from "express";
import Faq from "../models/Faq";

export const router = express.Router();

router.get("/faq", async (req, res) => {
  const faq = await Faq.find().lean();
  res.json({ faq });
});
