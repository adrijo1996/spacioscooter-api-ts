import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { DBURL, PORT, CORS_ORIGINS } from "../config";
import {router as faqRouter} from "./routers/faq.router";
import {router as rutasRouter} from "./routers/rutas.router";
import {router as sociosRouter} from "./routers/socios.router";


mongoose.connect(DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors({ origin: CORS_ORIGINS }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/',(req, res) => {return res.json({status: 'Connected'}); });
app.use(faqRouter);
app.use(rutasRouter);
app.use(sociosRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});